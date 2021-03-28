source setting.sh

function url_extract(){
	grep -oP $1 -e "http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?"
}

function url_extract_all(){
	for file in $(find $1)
	do
		if ! file --mime $file |grep -e "binary" 1>/dev/null;then
			if [ -f $file ]; then
				url_extract $file
			fi
		fi
	done|sort|uniq
}

function status_code(){
	curl --head $1 2>/dev/null| head -n 1 |sed -r "s/.* ([0-9]*) .*/\1/"
}

function link_check(){
	status=$(status_code $1)
	if [ "$status" == "" ]; then
		echo "broken link"
		return 1;
	else
		if [ "$status" -eq 404 ]; then
			echo "broken link"
			return 1;
		fi
	fi
	echo "normal link"
	return 0;
}

function link_check_all(){
	result=0
	for url in $(cat /dev/stdin)
	do
		if ! link_check $url 1>/dev/null; then
			echo "$url : broken" >&2
			echo $url
			result=1
		else
			echo "$url : living" >&2
		fi
	done
	return $result
}

function broken_link_test(){
	DOMAIN_NAME=$1
	wget -r -np --random-wait -x https://$DOMAIN_NAME --directory-prefix=downloaded_pages
	url_extract_all ./downloaded_pages/$DOMAIN_NAME | link_check_all
	result=$?
	rm -rf downloaded_pages
	return $result
}

function send_message(){
	MESSAGE=$(cat /dev/stdin | sed -e 's/"/\\\"/g')
	HOOK_URL=$1
	curl \
		-X POST\
		-H 'Content-type: application/json'\
		--data "{\"text\":\"$MESSAGE\"}"\
		$HOOK_URL
}

#====MAIN======
if [ "$HOOK_URL" == "" ]; then
	echo "ERROR: HOOK_URL is empty."
	echo "Please create slack incoming webhook and assign its url to HOOK_URL in setting.sh."
	exit 1;
fi
if ! broken_links=$(broken_link_test $TARGET_DOMAIN); then
	send_message $HOOK_URL << EOS
WARNING: Broken link detected!!
~~~~~Broken link list~~~~~~~~~
$broken_links
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
EOS
fi

source setting.sh

function cert_check(){
	dates=$(openssl s_client -connect $1:443 </dev/null 2>/dev/null|openssl x509 -noout -dates ) 

	notBefore=$(echo $dates|sed -e "s/notBefore=\([^=]*\)notAfter=\(.*\)/\1/")
	notAfter=$(echo $dates|sed -e "s/notBefore=\([^=]*\)notAfter=\(.*\)/\2/")

	nb=$(date --date="$notBefore" +%s)
	n=$(date +%s)
	na=$(date --date="$notAfter" +%s)

	if [ $n -lt $nb -o $na -lt $n ]; then
		echo "Expired certification detected!!"
		return 1;
	else
		echo "Certification is not expired."
		return 0;
	fi
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
if ! cert_check $TARGET_DOMAIN; then
	send_message $HOOK_URL << EOS
WARNING: Expired certification detected!!
EOS
fi

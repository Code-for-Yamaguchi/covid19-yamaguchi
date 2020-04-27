import axios from 'axios'
//import Data from '@/data/data.json'
import LastUpdate from '@/data/last_update.json'
import PatientsCnt from '@/data/patients_cnt.json'
import Patients from '@/data/patients.json'
import Inspections from '@/data/inspections.json'
import Hospitalizations from '@/data/hospitalizations.json'
import Querents from '@/data/querents.json'

export const state = () => ({
  //data: Data
  lastupdate: LastUpdate,
  patientscnt: PatientsCnt,
  patients: Patients,
  inspections: Inspections,
  hospitalizations: Hospitalizations,
  querents: Querents,
})

export const mutations = {
  getData(state, payload) {
	//state.data = payload.data,
	state.lastupdate = payload.lastupdate,
	state.patientscnt = payload.patientscnt,
	state.patients = payload.patients,
	state.inspections = payload.inspections,
	state.hospitalizations = payload.hospitalizations,
	state.querents = payload.querents
  }
}

export const actions = {
  async getDataAction(context) {
    const payload = {
	  //data: Data
	  lastupdate: LastUpdate,
	  patientscnt: PatientsCnt,
	  patients: Patients,
	  inspections: Inspections,
	  hospitalizations: Hospitalizations,
	  querents: Querents,
    }
    await axios.get(process.env.lastupdateUrl).then(res => {
      // payload.data.contacts = res.data.contacts
      // payload.data.inspections = res.data.inspections
      //payload.data.inspections_summary = res.data.inspections_summary
      //payload.data.patients_summary = res.data.patients_summary
      //payload.data.patients = res.data.patients
      //payload.data.querents = res.data.querents
	  //payload.data.lastUpdate = res.data.lastUpdate
	  //payload.data.main_summary = res.data.main_summary
	  payload.lastupdate = res.lastupdate
	  //payload.patientscnt = res.patientscnt
	  //payload.patients = res.patients
	  //payload.inspections = res.inspections
	  //payload.hospitalizations = res.hospitalizations
	  //payload.querents = res.querents
	})
	await axios.get(process.env.patientscntUrl).then(res => {
		payload.patientscnt = res.patientscnt
	})
	await axios.get(process.env.patientsUrl).then(res => {
		payload.patients = res.patients
	})
	await axios.get(process.env.inspectionsUrl).then(res => {
		payload.inspections = res.inspections
	})
	await axios.get(process.env.hospitalizationsUrl).then(res => {
		payload.hospitalizations = res.hospitalizations
	})
	await axios.get(process.env.querentsUrl).then(res => {
		payload.querents = res.querents
	})
    context.commit('getData', payload)
  }
}

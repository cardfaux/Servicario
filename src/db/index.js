import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase
	.initializeApp({
		apiKey: 'AIzaSyC21aIJDqnICdU_8EksgEdSn1ldd2AQ-Oc',
		authDomain: 'servicario-aed11.firebaseapp.com',
		databaseURL: 'https://servicario-aed11.firebaseio.com',
		projectId: 'servicario-aed11',
		storageBucket: 'servicario-aed11.appspot.com',
		messagingSenderId: '827333802715',
		appId: '1:827333802715:web:d9f84bc3bdb80e9dcbaafe'
	})
	.firestore();

export default db;

export const { Timestamp } = firebase.firestore;

async function fetchDataForPatient(patientId) {
	const downloadedData = [];
	for (const modality of ['t1c', 't1n', 't2f', 't2w']) {
		const url = `https://cdn.jsdelivr.net/gh/sachingooo/objs/seg/BraTS-MEN-${patientId}-000-${modality}.nii.gz`
		const response = await fetch(url);
		console.log(response);
		const data = await response.arrayBuffer();
		downloadedData.push(data);
	}
	console.log(downloadedData);
	return downloadedData;
}
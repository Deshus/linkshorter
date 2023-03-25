async function createLink(link) {
	let promise = new Promise(async (resolve, reject) => {
		axios.post('/shorten?url='+link)
			.then(async function (res) {
				resolve(res.data)
			})
			.catch(async function (err) {
				resolve(err.response.status)
			})
	})
	return promise
}


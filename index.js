app.post('/surveywebhook', function (req) {
    console.log(req.body);
    const svHash = req.body.svHash;
    const value = req.body.value;
}

if (value == "abc"){
	return {
		status: 200;
		"msg": "正確"
	};
} else {
	return {
		status: 200;
		"msg": "正確"
	};
}

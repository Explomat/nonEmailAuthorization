<%

DropFormsCache('x-local:/wt/web/common/wl_library.js');
var wl = OpenCodeLib('x-local:/wt/web/common/wl_library.js');

function trimException(ex){
	var inErr = Trim(ex);
	return inErr.substr(0, inErr.indexOf('\r\n', 0));
}

function register(queryObjects) {
	
	function isLoginOrEmailExist(login, email){
		return ArrayOptFirstElem(XQuery("sql:select c.login, c.email from collaborators c where c.login = '" + login + "' or c.email = '" + email + "'")) != undefined;
	}
	
	function fillCollaborator(doc, data){
		doc.TopElem.lastname = data.lastname;
		doc.TopElem.firstname = data.firstname;
		doc.TopElem.middlename = data.middlename;
		doc.TopElem.birth_date = new Date(data.dateNumber + "." + data.dateMonth + "." + Year(new Date()));
		doc.TopElem.email = data.email;
		doc.TopElem.login = data.login;
		doc.TopElem.password = data.password;
	}
	
	try {
		var data = tools.read_object(queryObjects.Body);
		if (isLoginOrEmailExist(data.login, data.email)){
			throw "Такой логин/email уже существует, введите другие данные или войдите, нажав на кнопку выше!";
		}
		
		var newDoc = tools.new_doc_by_name('collaborator');
		fillCollaborator(newDoc, data);
		newDoc.BindToDb();
		newDoc.Save();
		
		return wl.getResult({
			status: 'ok'
		});
	}
	catch(e){
		return wl.getResult({
			status: 'error',
			error: trimException(e)
		});
	}
}

function remind(queryObjects){
	
	function getCollaboratorByEmail(email){
		return ArrayOptFirstElem(XQuery("sql:select c.id, c.email from collaborators c where c.email = '" + email + "'"));
	}
	
	try {
		var data = tools.read_object(queryObjects.Body);
		var collaborator = getCollaboratorByEmail(data.email);
		if (collaborator == undefined){
			throw "Такой email не зарегистрирован!";
		}
		
		tools.create_notification('e-learning_1', collaborator.id);
		return wl.getResult({
			status: 'ok'
		});
	}
	catch(e){
		return wl.getResult({
			status: 'error',
			error: trimException(e)
		});
	}
}

%>
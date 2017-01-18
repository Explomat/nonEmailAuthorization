import { addServer, getAll } from  './servers';
import env from './env';

const routerId = '6376855563539274986';
const customBaseUrl = env === 'production' ? '/custom_web_template.html' : 'https://study.merlion.ru/custom_web_template.html';

addServer({ id: '6376574714749612076', name: 'Test' })
.addActions(
	[
		'register',
		'remind'
	]
);

const obj = {

	url: {
		getServerId(serverName, actionName) {
			const _servers = getAll().filter(s => {
				const actions = s.getActions().filter(action => {
					return action === actionName;
				});
				
				return (s.getName() === serverName && actions.length > 0);
			}).map(s => s.getId());
			return _servers.length > 0 ? _servers[0] : '';
		},

		createPath(inputObj){
			if (!('server_name' in inputObj)) return '/';
			if (!('action_name' in inputObj)) inputObj.action_name = '';
			const serverId = this.getServerId(inputObj.server_name, inputObj.action_name);
			const basePath = customBaseUrl.concat('?object_id=').concat(routerId).concat('&server_id='.concat(serverId));

			return basePath.concat(Object.keys(inputObj).map(k => {
				return '&'.concat(k).concat('=').concat(inputObj[k]);
			}).join(''));
		}
	},

	dom: {
		appId: 'app'
	},

	hashes: {
		boilerplate: 'boilerplate'
	}
};

export default obj;
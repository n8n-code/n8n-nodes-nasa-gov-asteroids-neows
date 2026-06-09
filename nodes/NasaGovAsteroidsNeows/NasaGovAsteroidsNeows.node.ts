import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class NasaGovAsteroidsNeows implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Nasa Gov Asteroids Neows',
		name: 'N8nDevNasaGovAsteroidsNeows',
		icon: { light: 'file:./nasa-gov-asteroids-neows.svg', dark: 'file:./nasa-gov-asteroids-neows.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'TechPort RESTful API',
		defaults: { name: 'Nasa Gov Asteroids Neows' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevNasaGovAsteroidsNeowsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}

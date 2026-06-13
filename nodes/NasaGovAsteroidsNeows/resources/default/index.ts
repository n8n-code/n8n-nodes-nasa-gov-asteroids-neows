import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET API",
					"value": "GET API",
					"action": "GET API",
					"description": "Returns the swagger specification for the API.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api"
						}
					}
				},
				{
					"name": "GET API Projects",
					"value": "GET API Projects",
					"action": "GET API Projects",
					"description": "Returns information about a specific technology project.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/projects/{{$parameter[\"id\"]}}{{$parameter[\".format\"]}}"
						}
					}
				},
				{
					"name": "GET API Projects Format",
					"value": "GET API Projects Format",
					"action": "GET API Projects Format",
					"description": "Returns a list of available technology project IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/projects{{$parameter[\".format\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET API"
					]
				}
			}
		},
		{
			"displayName": "GET /api/projects/{id}{.format}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET API Projects"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of project to fetch",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET API Projects"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": "The response type desired.",
			"default": "xml",
			"type": "options",
			"options": [
				{
					"name": "JSON",
					"value": "json"
				},
				{
					"name": "XML",
					"value": "xml"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET API Projects"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "-format",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET API Projects"
					]
				}
			}
		},
		{
			"displayName": "GET /api/projects{.format}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET API Projects Format"
					]
				}
			}
		},
		{
			"displayName": "Updated Since",
			"name": "updatedSince",
			"required": true,
			"description": "ISO 8601 full-date in the format YYYY-MM-DD. Filters the list of available ID values by their lastUpdated parameter.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "updatedSince",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET API Projects Format"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": "The response type desired.",
			"default": "json",
			"type": "options",
			"options": [
				{
					"name": "JSON",
					"value": "json"
				},
				{
					"name": "XML",
					"value": "xml"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET API Projects Format"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "-format",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET API Projects Format"
					]
				}
			}
		},
];

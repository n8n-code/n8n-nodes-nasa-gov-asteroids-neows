import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class NasaGovAsteroidsNeowsApi implements ICredentialType {
        name = 'N8nDevNasaGovAsteroidsNeowsApi';

        displayName = 'Nasa Gov Asteroids Neows API';

        icon: Icon = { light: 'file:../nodes/NasaGovAsteroidsNeows/nasa-gov-asteroids-neows.svg', dark: 'file:../nodes/NasaGovAsteroidsNeows/nasa-gov-asteroids-neows.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'http://techport.nasa.gov/api',
                        required: true,
                        placeholder: 'http://techport.nasa.gov/api',
                        description: 'The base URL of your Nasa Gov Asteroids Neows API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}

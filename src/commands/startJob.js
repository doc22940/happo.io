import makeRequest from '../makeRequest';

export default function startJob(
  sha1,
  sha2,
  { apiKey, apiSecret, endpoint },
  { expectedProjects },
) {
  return makeRequest(
    {
      url: `${endpoint}/api/jobs/${sha1}/${sha2}`,
      method: 'POST',
      json: true,
      body: {
        projects: expectedProjects ? expectedProjects.split(',') : undefined,
      },
    },
    { apiKey, apiSecret },
  );
}
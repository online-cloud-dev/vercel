import type Client from '../client';
import type { Configuration } from '../../commands/integration/types';

export async function fetchMarketplaceIntegrations(
  client: Client,
  slug: string
) {
  const searchParams = new URLSearchParams();
  searchParams.set('view', 'account');
  searchParams.set('installationType', 'marketplace');
  searchParams.set('integrationIdOrSlug', slug);
  return await client.fetch<Configuration[]>(
    `/v1/integrations/configurations?${searchParams}`,
    {
      json: true,
    }
  );
}

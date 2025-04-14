import { MetadataRoute } from 'next';

import { fetchScenarios } from './scenarios/services/fetch-scenarios';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { scenarios } = await fetchScenarios();
  const categories = scenarios.reduce<string[]>((acc, scenario) => {
    scenario.categories.forEach((category) => {
      if (!acc.includes(category)) acc.push(category);
    });
    return acc;
  }, []);

  return [
    {
      url: 'https://www.convo-ai.cc/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.convo-ai.cc/scenarios',
      lastModified: new Date(),
    },
    {
      url: 'https://www.convo-ai.cc/profile',
      lastModified: new Date(),
    },
    {
      url: 'https://www.convo-ai.cc/signin',
      lastModified: new Date(),
    },
    ...categories.map((category) => ({
      url: `https://www.convo-ai.cc/scenarios?category=${encodeURIComponent(category)}`,
      lastModified: new Date(),
    })),
  ];
}

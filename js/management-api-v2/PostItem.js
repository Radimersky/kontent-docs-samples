// DocSection: cm_api_v2_post_item
// Tip: Find more about JS/TS SDKs at https://kontent.ai/learn/javascript
// Using ES6 syntax
import { ManagementClient } from '@kentico/kontent-management';

const client = new ManagementClient({
  projectId: '<YOUR_PROJECT_ID>',
  apiKey: '<YOUR_API_KEY>'
});

const response = await client.addContentItem()
  .withData(
    {
      name: 'On Roasts',
      codename: 'my_article_my_article',
      type: {
        codename: 'article'
      },
      collection: {
        codename: 'default'
      },
      external_id: '59713'
    }
  )
  .toPromise();
// EndDocSection

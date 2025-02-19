// DocSection: cm_api_v2_post_workflow
// Tip: Find more about JS/TS SDKs at https://kontent.ai/learn/javascript
// Using ES6 syntax
import { ManagementClient } from '@kentico/kontent-management';

const client = new ManagementClient({
  projectId: '<YOUR_PROJECT_ID>',
  apiKey: '<YOUR_API_KEY>'
});

const response = await client.addWorkflow()
  .withData(
    {
      name: "My workflow",
      scopes: [
        {
          content_types: [
            {
              id: "1aeb9220-f167-4f8e-a7db-1bfec365fa80"
            }
          ]
        }
      ],
      steps: [
        {
          name: "First step",
          codename: "first_step",
          color: "sky-blue",
          transitions_to: [
            {
              step: {
                codename: "second_step"
              }
            }
          ],
          role_ids: []
        },
        {
          name: "Second step",
          codename: "second_step",
          color: "rose",
          transitions_to: [
            {
              step: {
                codename: "published"
              }
            }
          ],
          role_ids: [
            "e796887c-38a1-4ab2-a999-c40861bb7a4b"
          ]
        }
      ],
      published_step: {
        unpublish_role_ids: [
          "e796887c-38a1-4ab2-a999-c40861bb7a4b"
        ],
        create_new_version_role_ids: []
      },
      archived_step: {
        role_ids: []
      }
    }
  )
  .toPromise();
// EndDocSection
// DocSection: getting_content_get_items
// Tip: Find more about Swift SDK at https://kontent.ai/learn/ios
import KenticoKontentDelivery

let client = DeliveryClient.init(projectId: "8d20758c-d74c-4f59-ae04-ee928c0816b7")

// Note: Using 'items' as custom query returns all content items,
// but to map them to a single model, a filter is needed.
let customQuery = "items?system.type=article"

// More about strongly-typed models https://github.com/Kentico/kontent-delivery-sdk-swift#using-strongly-typed-models
client.getItems(modelType: Article.self, customQuery: customQuery) { (isSuccess, itemsResponse, error) in
    if isSuccess {
        if let articles = itemsResponse?.items {
            // Use your items here
        }
    } else {
        if let error = error {
            print(error)
        }
    }
}
// EndDocSection
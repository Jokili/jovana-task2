export default {

    priceOfTheFirstProduct: '(//*[@class="cart_item_label"][1])[1]//div[2]//div',
    priceOfTheSecondProduct: '(//*[@class="cart_item_label"][1])[2]//div[2]//div',
    itemTotalPriceWithoutTax: '//*[@class="summary_subtotal_label"]',
    taxForProducts: '//*[@class="summary_tax_label"]',
    total: '//*[@class="summary_total_label"]',
    backToProductButton: '[data-test="back-to-products"]'
}
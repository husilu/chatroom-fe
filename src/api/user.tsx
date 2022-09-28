

export function getFetchOrder(user) {
    return {
        url: "/order/detail?is_enc=1",
        data,
        isLoading: true,
        cache: false,
    };
}
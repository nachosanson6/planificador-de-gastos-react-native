export const formatedAmount = (amount) => {
    return Number(amount).toLocaleString('es-ES',
        {
            style: 'currency',
            currency: 'EUR'
        })
}
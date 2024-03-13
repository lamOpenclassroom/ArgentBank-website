import "./mainuser.css"

function Account({ id, accountTitle, accountAmount, description, buttonTransaction }) {
    return (
            <section key={id} class="account">
                <div class="account-content-wrapper">
                    <h3 class="account-title">{accountTitle}</h3>
                    <p class="account-amount">{accountAmount}</p>
                    <p class="account-amount-description">{description}</p>
                </div>
                <div class="account-content-wrapper cta">
                    <button class="transaction-button">{buttonTransaction}</button>
                </div>
            </section> 
    )
}
export default Account
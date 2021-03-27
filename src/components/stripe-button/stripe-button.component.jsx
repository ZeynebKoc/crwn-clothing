import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IZdn2JtBvclR54Q5oXIWCPhcETswyf5C0FGYwIzTMvslxS4LlYpOvBopo9Nra3lh59sjNlccp5urFvSgbxuDeY900irtPigcg' ;

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!')
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`} 
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    );
};

export default StripeCheckoutButton;
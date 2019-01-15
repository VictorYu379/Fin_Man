<template>
    <div id="secure">
        <v-dialog/>
        <h1>expenditure</h1>
        <v-select type="text" name="payment_method" v-model="input.payment_method" :options="options" placeholder="Payment Method" />
        <input type="text" name="card_last_4_digits" v-model="input.card_last_4_digits" placeholder="Last Four Digits" />
        <input type="text" name="price" v-model="input.price" placeholder="Price (in USD)" />
        <textarea type="text" name="detail" v-model="input.detail" placeholder="Detail" />
        <button type="button" v-on:click="submit()">Submit</button>
        <button type="button" v-on:click="logout()">Log Out</button>
    </div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {
                input: {
                    payment_method: "",
                    price: "",
                    card_last_4_digits: "",
                    detail: ""
                },
                options: [
                    'credit card',
                    'debit card',
                    'venmo',
                    'cash',
                    'alipay',
                    'other'
                ],
            }
        },
        methods: {
            submit() {
                this.$modal.show('dialog', {
                    title: 'Alert!',
                    text: 'Do you want to submit?',
                    buttons: [
                        {
                            title: 'Submit',
                            handler: () => {
                                // console.log(this.input.payment_method);
                                this.axios.post('/submit', {
                                    payment_method: this.input.payment_method,
                                    card_last_4_digits: this.input.card_last_4_digits,
                                    price: this.input.price,
                                    detail: this.input.detail
                                }).then((result) => {
                                    window.location.href = '/dashboard'
                                }).catch(error => {
                                    alert("Network Error!");
                                });
                            }
                        },
                        {
                            title: 'Close'
                        }
                    ]
                });
            },
            logout() {
                this.axios.post('/logout').then((result) => {
                            window.location.href = '/'
                        }).catch(error => {
                            alert("Network Error!");
                        });
            }
        }
    }
</script>

<style scoped>
    #secure {
        width: 800px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }

    #secure * {
        margin: 10px;
    }

    textarea {
        margin: auto;
        width: 96%;
        height: 100px;
        display: block;
    }
</style>
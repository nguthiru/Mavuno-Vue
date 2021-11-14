<template>
  <Modal @CloseModal="closeModals">
    <template v-slot:title>
      <p>Deposit via:</p>
      <div class="deposit-options">
        <div
          id="credit-card"
          class="payment-option"
          @click="selectedCheckout = 'credit-card'"
        >
          <img
            src="../../../src/assets/credit-card.png"
            alt="credit-card"
            srcset=""
          />
        </div>
        <div
          id="paypal"
          class="payment-option"
          @click="selectedCheckout = 'paypal'"
        >
          <img
            src="../../../src/assets/paypal.png"
            alt="credit-card"
            srcset=""
          />
        </div>
        <div
          id="mpesa"
          class="payment-option"
          @click="selectedCheckout = 'mpesa'"
        >
          <img
            src="../../../src/assets/mpesa.png"
            alt="credit-card"
            srcset=""
          />
        </div>
        <div
          id="gpay"
          class="payment-option"
          @click="selectedCheckout = 'gpay'"
        >
          <img src="../../../src/assets/gpay.png" alt="credit-card" srcset="" />
        </div>
      </div>
    </template>

    <template v-slot:body>
      <div class="deposit-form">
        <div
          class="credit-card-form"
          v-show="selectedCheckout === 'credit-card'"
        >
          <div class="credit-card-details credit-card-inputs">
            <div class="form-container">
              <label for="Cardholder Name"> Cardholder name</label>
              <input type="text" placeholder="Tommy Lee" />
            </div>
            <div class="form-container">
              <label for="Cardholder Number"> Card number</label>
              <input type="text" placeholder="0000 0000 0000 0000" />
            </div>
            <div class="side-form">
              <div class="form-container">
                <label for="Expiry Date"> Exp date</label>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div class="form-container">
                <label for="CVC">CVC</label>
                <input type="text" placeholder="..." />
              </div>
            </div>
          </div>
          <div class="billing-address credit-card-details">
            <div class="form-container">
              <label for="CVC">Country</label>
              <select>
                <option value="Kenya">Kenya</option>
              </select>
            </div>
            <div class="side-form">
              <div class="form-container">
                <label for="Expiry Date"> Postal Code</label>
                <input type="text" placeholder="00100" />
              </div>
              <div class="form-container">
                <label for="CVC">City</label>
                <select>
                  <option value="Nairobi">Nairobi</option>
                </select>
              </div>
            </div>
          </div>
          <Button>
            <h6>Deposit</h6>
          </Button>
        </div>
        <div class="paypal-form" v-show="selectedCheckout === 'paypal'">
          Paypal Form
        </div>
        <div class="mpesa-form" v-show="selectedCheckout === 'mpesa'">
          Mpesa Form
        </div>
        <div class="gpay-form" v-show="selectedCheckout === 'gpay'">
          Gpay Form
        </div>
      </div>
    </template>
  </Modal>
</template>
<script>
import Modal from "../../components/modal.vue";
import Button from "../shared/button.vue"
export default {
  name: "deposit_modal",
  data() {
    return {
      selectedCheckout: "credit-card",
    };
  },
  components: { Modal,Button },
  methods: {
    closeModals() {
      this.$emit("closeModal");
    },
  },
};
</script>
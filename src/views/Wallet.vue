<template>
  <sidebar />

  <main id="wallet">
    <DepositModal v-show="deposit_modal" @closeModal="deposit_modal = false" />
    <section id="transactions">
      <h4>My Wallet</h4>
      <p class="sub-title">Manage your Wallet, Subscriptions and Documents</p>
      <h6 style="padding-top: 0.6em">Usage Summary</h6>
      <!-- <p class="sub-title">Cash flow in and out of wallet</p> -->
      <div class="wallet-summary transaction-section-content">
        <SummaryCard 
        v-if= "summary"
          :values="summary['deposits']"
          text="Deposited"
          image="https://img.icons8.com/color-glass/48/000000/deposit.png"
        />
        <SummaryCard 
        v-if= "summary"
        text= "Withdrawn"
          :values="summary['withdraws']"
          image="https://img.icons8.com/offices/30/000000/withdrawal-limit.png"
        />
        <SummaryCard 
        v-if= "summary"
        text= "Bidded"
          :values="summary['bids']"
          image="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-bid-nft-wanicon-lineal-color-wanicon.png"
        />
        <SummaryCard 
        v-if= "summary"
        text= "Subscriptions"
          :values="summary['subs']"
          image="https://img.icons8.com/external-parzival-1997-outline-color-parzival-1997/64/000000/external-subscription-model-digital-asset-and-intangible-product-parzival-1997-outline-color-parzival-1997-1.png"
        />
      </div>

      <div class="transaction-section">
        <h6>Subscriptions</h6>
        <!-- <p class="sub-title">Manage Montly Account Subscriptions</p> -->

        <div id="wallet-subscriptions" class="transaction-section-content">
          <div
            class="wallet-subscription"
            v-for="sub in subscriptions"
            :key="sub.id"
          >
            <p class="subscription-heading">{{ sub.service.name }}</p>
            <p>
              {{ sub.service.description }}
            </p>
            <div>
              <p>Renews on: {{ date(sub.service.renewal_date) }}</p>
              <div class="amount-unsubscribe">
                <p>{{ price_format(sub.service.price) }}sh/month</p>
                <u><p class="unsubscribe">unsubscribe</p></u>
              </div>
            </div>
          </div>

          <div class="add-subscription">
            <i class="fa fa-plus"></i>
          </div>
        </div>
      </div>
      <div class="transaction-section">
        <h6>Documents</h6>
        <!-- <p class="sub-title">Manage Coupons,Invoices and Receipts</p> -->

        <div id="wallet-invoices" class="transaction-section-content">
          <div class="wallet-receipt wallet-document">
            <h6>Mavuno Farm</h6>
            <p>10999</p>
            <p>12th October 2002</p>
          </div>
        </div>
      </div>
    </section>
    <section id="wallet-transaction">
      <div id="wallet-card">
        <img src="../../src/assets/logo.png" />
        <div class="text-group-container">
          <p>Name:</p>
          <p class="card-owner">Edwin Ndiritu Nguthiru</p>
        </div>

        <div class="text-group-container">
          <p>Current Balance:</p>
          <h5 class="wallet-balance">Shs.{{ wallet.balance }}</h5>
        </div>
        <p class="card-id">{{ wallet.uuid }}</p>
      </div>
      <div class="wallet-operations">
        <div class="wallet-operation" @click="deposit_modal = true">
          <img src="../../src/assets/icons/deposit.svg" />
          <u><h6>Deposit</h6></u>
        </div>
        <div class="wallet-operation">
          <img src="../../src/assets/icons/withdraw.svg" />
          <u><h6>Withdraw</h6></u>
        </div>
        <div class="wallet-operation">
          <img src="../../src/assets/icons/receipt.svg" />
          <u><h6>Bill</h6></u>
        </div>
      </div>
      <div id="recent-transactions">
        <div class="flex-container space-btn">
          <h6>Transactions</h6>
          <p class="caption">July 2021</p>
        </div>
        <Transaction
          v-for="transaction in transactions"
          :key="transaction.uuid"
          :details="transaction"
        />
      </div>
    </section>
  </main>
</template>

<script>
import sidebar from "../components/navigation/sidebar.vue";
// import Chart from "../components/Wallet/chart.vue";
import Transaction from "../components/Wallet/transaction.vue";
import SummaryCard from "../components/Wallet/summary_card.vue";

import base from "../main";
import DepositModal from "../components/Wallet/deposit_modal.vue";
import format_date from "../methods/methods";
// import Chart2 from '../components/Wallet/chart2.vue';
export default {
  components: {
    sidebar,
    // Chart,
    Transaction,
    SummaryCard,

    DepositModal,
    // Chart2,
  },
  data() {
    return {
      wallet: {},
      deposit_modal: false,
      withdraw_modal: false,
      transactions: [],
      subscriptions: [],
      summary: null,
    };
  },
  methods: {
    price_format(price) {
      return parseInt(price);
    },
    date(date) {
      return format_date(date);
    },
  },
  async created() {
    const response = await base.get("finance/wallet/mywallet/");
    this.wallet = response.data;
    const response_transactions = await base.get("finance/transactions/");
    this.transactions = response_transactions.data;
    const response_subscriptions = await base.get("finance/subscriptions/");
    this.subscriptions = response_subscriptions.data;
    const response_summary = await base.get("finance/transactions/stats/");
    this.summary = response_summary.data;

  },
};
</script>

<style>
</style>
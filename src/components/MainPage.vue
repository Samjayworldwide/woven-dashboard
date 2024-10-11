<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
import * as chartConfig from "../chartConfig.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "App",
  components: {
    Doughnut,
  },
  data() {
    return {
      ...chartConfig,
      activeItem: 1,
    };
  },

  methods: {
    setActiveItem(item) {
      this.activeItem = item;
    },

    navigateToTransactionDetails() {
      this.$router.push("/transaction-details");
    },
  },
};
</script>

<template>
  <div class="block main-background hero">
    <div class="container grid grid--1x3 pt-10">
      <div class="border-2 border-transparent rounded-lg sub-background">
        <header class="flex justify-around mt-5">
          <p class="mt-2">Total Amount received</p>
          <div class="time-period">
            <select id="time-period" name="time-period" class="first-select">
              <option value="this-week">This week</option>
              <option value="this-month">This month</option>
              <option value="this-year">This year</option>
            </select>
          </div>
        </header>

        <div class="mt-10 ml-5 mr-5">
          <h1 class="font-bold text-4xl">
            ₦27,002,075.<span class="text-2xl">65</span>
          </h1>
        </div>
        <hr class="line" />
        <div class="flex justify-between mb-3 mr-5 ml-5 mt-3">
          <div class="flex">
            <p class="text-sm mr-2 text-color">View Transactions</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#C94A5A"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#c94a5a"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div class="border-2 border-transparent rounded-lg sub-background card">
        <header class="flex justify-around mt-5">
          <p class="mt-2">Total payouts</p>
          <div class="time-period">
            <select id="time-period" name="time-period" class="first-select">
              <option value="this-week">This week</option>
              <option value="this-month">This month</option>
              <option value="this-year">This year</option>
            </select>
          </div>
        </header>

        <div class="mt-10 ml-5 mr-5">
          <h1 class="font-bold text-4xl">
            ₦27,002,075.<span class="text-2xl">65</span>
          </h1>
        </div>
        <hr class="line" />
        <div class="flex justify-between mb-3 mr-5 ml-5 mt-3">
          <div class="flex">
            <p class="text-sm mr-2 text-color">View Transactions</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#C94A5A"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#c94a5a"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>

      <div
        class="third-sub-background border-2 border-transparent rounded-lg card"
      >
        <header class="flex justify-around mt-5">
          <p class="mt-2">Transaction analytics</p>
          <div class="time-period">
            <select id="time-period" name="time-period" class="third-select">
              <option value="this-week">This week</option>
              <option value="this-month">This month</option>
              <option value="this-year">This year</option>
            </select>
          </div>
        </header>
        <div class="flex justify-center">
          <div class="w-[180px] h-[180px] relative ml-5 mr-5">
            <Doughnut :data="data" :options="options" />
            <div class="chart-center-text">
              <h2 class="font-bold">1260</h2>
              <p class="text-xs font-bold">Transactions</p>
            </div>
          </div>

          <div class="mt-10">
            <div class="flex">
              <div
                class="border-2 border-transparent h-[15px] w-[15px] mr-3 failed-transaction"
              ></div>
              <p class="text-sm">Failed transactions 5%</p>
            </div>

            <div class="flex">
              <div
                class="border-2 border-transparent h-[15px] w-[15px] mr-3 success-transaction"
              ></div>
              <p class="text-sm">Successful transactions 93%</p>
            </div>

            <div class="flex">
              <div
                class="border-2 border-transparent h-[15px] w-[15px] mr-3 pending-transaction"
              ></div>
              <p class="text-sm">Pending transactions 2%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-20 sub-background h-[80px] rounded-lg pt-8">
      <div class="flex">
        <div @click="setActiveItem(1)" class="cursor-pointer">
          <p
            :class="{
              'text-[#79242f]': activeItem === 1,
              'text-[#646668]': activeItem !== 1,
            }"
            class="mr-10 ml-10"
          >
            Transactions
          </p>
        </div>
        <div @click="setActiveItem(2)" class="cursor-pointer">
          <p
            :class="{
              'text-[#79242f]': activeItem === 2,
              'text-[#646668]': activeItem !== 2,
            }"
          >
            Customers
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="activeItem === 1"
      class="overflow-x-auto mt-10 border rounded-xl"
    >
      <table class="min-w-full border-collapse rounded-lg block md:table">
        <thead class="block md:table-header-group">
          <tr class="bg-white">
            <th
              class="p-2 text-gray-600 font-bold border border-transparent text-left uppercase"
            >
              customer
            </th>
            <th
              class="p-2 text-gray-600 font-bold border border-transparent text-left uppercase"
            >
              amount
            </th>
            <th
              class="p-2 text-gray-600 font-bold border border-transparent text-left uppercase"
            >
              reference
            </th>
            <th
              class="p-2 text-gray-600 font-bold border border-transparent text-left uppercase"
            >
              channel
            </th>
            <th
              class="p-2 text-gray-600 font-bold border border-transparent text-left uppercase"
            >
              <div class="flex">
                <p>status</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </div>
            </th>

            <th
              class="p-2 text-gray-600 font-bold border border-transparent text-left uppercase"
            >
              <div class="flex">
                <p>type</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </div>
            </th>
            <th
              class="p-2 text-gray-600 font-bold border border-transparent text-left uppercase"
            >
              payment date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white cursor-pointer" @click="navigateToTransactionDetails">
            <td class="p-2 text-left">
              <p>Sharuk Kahn</p>
              <p>sharukkibobo@amail.com</p>
            </td>
            <td class="p-2 text-left">N27,002,075.65</td>
            <td class="p-2 text-left">WF_PY_53_1XYN9MYHGRFT</td>
            <td class="p-2 text-left">Card</td>
            <td>
              <div class="failure-status border rounded-sm">
                <p class="failed-status-text text-sm">Failed</p>
              </div>
            </td>
            <td class="p-2 text-left uppercase failed-status-text">Payout</td>
            <td class="p-2 text-left">March 3. 2023 4:25 PM</td>
          </tr>

          <tr class="table-row-color cursor-pointer" @click="navigateToTransactionDetails">
            <td class="p-2 text-left">
              <p>Sharuk Kahn</p>
              <p>sharukkibobo@amail.com</p>
            </td>
            <td class="p-2 text-left">N27,002,075.65</td>
            <td class="p-2 text-left">WF_PY_53_1XYN9MYHGRFT</td>
            <td class="p-2 text-left">Card</td>
            <td class="success-margin">
              <div class="success-status border rounded-sm max-md:mr-7">
                <p class="success-status-text text-sm">Successful</p>
              </div>
            </td>
            <td class="p-2 text-left uppercase success-status-text">Payout</td>
            <td class="p-2 text-left">March 3. 2023 4:25 PM</td>
          </tr>

          <tr class="bg-white cursor-pointer" @click="navigateToTransactionDetails">
            <td class="p-2 text-left">
              <p>Sharuk Kahn</p>
              <p>sharukkibobo@amail.com</p>
            </td>
            <td class="p-2 text-left">N27,002,075.65</td>
            <td class="p-2 text-left">WF_PY_53_1XYN9MYHGRFT</td>
            <td class="p-2 text-left">Card</td>
            <td>
              <div class="failure-status border rounded-sm">
                <p class="failed-status-text text-sm">Failed</p>
              </div>
            </td>
            <td class="p-2 text-left uppercase failed-status-text">Payout</td>
            <td class="p-2 text-left">March 3. 2023 4:25 PM</td>
          </tr>
           
          <tr class="table-row-color cursor-pointer" @click="navigateToTransactionDetails">
            <td class="p-2 text-left">
              <p>Sharuk Kahn</p>
              <p>sharukkibobo@amail.com</p>
            </td>
            <td class="p-2 text-left">N27,002,075.65</td>
            <td class="p-2 text-left">WF_PY_53_1XYN9MYHGRFT</td>
            <td class="p-2 text-left">Card</td>
            <td>
              <div class="success-status border rounded-sm max-md:mr-7">
                <p class="success-status-text text-sm">Successful</p>
              </div>
            </td>
            <td class="p-2 text-left uppercase success-status-text">Payout</td>
            <td class="p-2 text-left">March 3. 2023 4:25 PM</td>
          </tr>

          <tr class="bg-white cursor-pointer" @click="navigateToTransactionDetails">
            <td class="p-2 text-left">
              <p>Sharuk Kahn</p>
              <p>sharukkibobo@amail.com</p>
            </td>
            <td class="p-2 text-left">N27,002,075.65</td>
            <td class="p-2 text-left">WF_PY_53_1XYN9MYHGRFT</td>
            <td class="p-2 text-left">Card</td>
            <td>
              <div class="failure-status border rounded-sm">
                <p class="failed-status-text text-sm">Failed</p>
              </div>
            </td>
            <td class="p-2 text-left uppercase failed-status-text">Payout</td>
            <td class="p-2 text-left">March 3. 2023 4:25 PM</td>
          </tr>
          
        </tbody>
      </table>
      <div class="bg-white h-[50px] flex justify-end items-center">
        <p
          class="uppercase text-color underline cursor-pointer mr-5 font-bold text-sm"
        >
          See all transactions
        </p>
      </div>
    </div>

    <div
      v-if="activeItem === 2"
      class="overflow-x-auto mt-10 border rounded-xl"
    >
      <table class="min-w-full border-collapse rounded-lg block md:table">
        <thead class="block md:table-header-group">
          <tr class="bg-white">
            <th
              class="p-2 text-gray-600 font-bold border border-transparent text-left uppercase"
            >
              customer
            </th>
            <th
              class="p-2 text-gray-600 font-bold border border-transparent text-left uppercase"
            >
              phone
            </th>
            <th
              class="p-2 text-gray-600 font-bold border border-transparent text-left uppercase"
            >
              nuban
            </th>
            <th
              class="p-2 text-gray-600 font-bold border border-transparent text-left uppercase"
            >
              reference
            </th>
            <th
              class="p-2 text-gray-600 font-bold border border-transparent text-left uppercase"
            >
              date created
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white">
            <td class="p-2 text-left">
              <p>Sharuk Kahn</p>
              <p>sharukkibobo@amail.com</p>
            </td>
            <td class="p-2 text-left">09183746372</td>
            <td class="p-2 text-left">0038475448</td>
            <td class="p-2 text-left">COMPLETE SIZE</td>
            <td class="p-2 text-left">Manch ? 9022 1.25 DM</td>
          </tr>
          <tr class="table-row-color">
            <td class="p-2 text-left">
              <p>Sharuk Kahn</p>
              <p>sharukkibobo@amail.com</p>
            </td>
            <td class="p-2 text-left">09183746372</td>
            <td class="p-2 text-left">0038475448</td>
            <td class="p-2 text-left">COMPLETE SIZE</td>
            <td class="p-2 text-left">Manch ? 9022 1.25 DM</td>
          </tr>
          <tr class="bg-white">
            <td class="p-2 text-left">
              <p>Sharuk Kahn</p>
              <p>sharukkibobo@amail.com</p>
            </td>
            <td class="p-2 text-left">09183746372</td>
            <td class="p-2 text-left">0038475448</td>
            <td class="p-2 text-left">COMPLETE SIZE</td>
            <td class="p-2 text-left">Manch ? 9022 1.25 DM</td>
          </tr>
          <tr class="table-row-color">
            <td class="p-2 text-left">
              <p>Sharuk Kahn</p>
              <p>sharukkibobo@amail.com</p>
            </td>
            <td class="p-2 text-left">09183746372</td>
            <td class="p-2 text-left">0038475448</td>
            <td class="p-2 text-left">COMPLETE SIZE</td>
            <td class="p-2 text-left">Manch ? 9022 1.25 DM</td>
          </tr>
          <tr class="bg-white">
            <td class="p-2 text-left">
              <p>Sharuk Kahn</p>
              <p>sharukkibobo@amail.com</p>
            </td>
            <td class="p-2 text-left">09183746372</td>
            <td class="p-2 text-left">0038475448</td>
            <td class="p-2 text-left">COMPLETE SIZE</td>
            <td class="p-2 text-left">Manch ? 9022 1.25 DM</td>
          </tr>
        </tbody>
      </table>
      <div class="bg-white h-[50px] flex justify-end items-center">
        <p
          class="uppercase text-color underline cursor-pointer mr-5 font-bold text-sm"
        >
          See all customers
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.text-color {
  color: #c94a5a;
}

.line {
  border: none;
  border-top: 2px solid #eef0f1;
  width: 90%;
  margin-top: 20px;
  margin-left: 15px;
}

.first-select {
  background-color: #e4f7f5;
  color: #0d3c37;
  border: none;
  outline: none;
  padding: 8px;
  border-radius: 4px;
}

.failure-status {
  background: #ffe5e9;
  width: 100px;
  padding-top: 3px;
  padding-left: 25px;
}

.success-status {
  background: #e4f7f5;
  width: 100px;
  padding-top: 3px;
  padding-left: 13px;
}

@media screen and (min-width: 1034px) {
  .success-margin {
    margin-right: 90px;
  }
}

.success-status-text {
  color: #0b3c35;
}

.failed-status-text {
  color: #79242f;
}

.block {
  --padding-vertical: 6rem;
  padding: var(--padding-vertical) 2rem;
}

@media screen and (min-width: 768px) {
  .hero {
    padding-top: 0;
  }
  .hero__content {
    text-align: left;
    align-self: center;
  }
}

.container {
  margin: 0 auto;
}

.main-background {
  background: #eef0f1;
  width: 100vw;
}

.table-row-color {
  background: #eef0f1;
}

.sub-background {
  background-color: #ffffff;
}

.third-sub-background {
  background: linear-gradient(
    to left,
    rgba(204, 255, 250, 0.25),
    rgba(255, 252, 245, 0.25),
    rgba(255, 229, 233, 0.25)
  );
}

.first-select option {
  background-color: #e4f7f5;
  color: #e4f7f5;
}

.third-select {
  background-color: #ffffff;
  color: #0d3c37;
  border: none;
  outline: none;
  padding: 8px;
  border-radius: 4px;
}

.chart-center-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.chart-center-text h2 {
  font-size: 24px;
  margin: 0;
}

.chart-center-text p {
  margin: 0;
}

.grid {
  display: grid;
  gap: 1rem 4rem;
  justify-content: center;
  align-items: center;
}

.failed-transaction {
  background-color: #a63241;
}

.success-transaction {
  background-color: #4bdeca;
}

.pending-transaction {
  background-color: #eb8b1e;
}

@media screen and (min-width: 1034px) {
  .grid--1x3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

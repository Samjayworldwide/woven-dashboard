<script>
export default {
  methods: {
    navigateToHomePage() {
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <div class="block main-background hero">
    <div class="flex mb-5 pt-5 cursor-pointer" @click="navigateToHomePage">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
      <p class="text-sm main-text-color">Back</p>
    </div>
    <p class="mb-5 main-text-color">Type: Payout</p>

    <div class="grid grid--1x2 mx-auto">
      <div class="bg-white border border-transparent rounded-lg pt-10">
        <div class="">
          <section class="ml-5 mr-5">
            <div class="flex justify-between">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#188475"
                  class="size-9 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p class="font-bold main-text-color">801268224</p>
              </div>

              <div>
                <p class="main-text-color">Amount</p>
                <p class="main-text-color">N100.00</p>
              </div>
            </div>
          </section>
          <hr class="line" />
          <section class="ml-5 mr-5">
            <div class="">
              <div class="flex justify-between">
                <p class="text-xs font-bold main-text-color">
                  customer reference
                </p>
                <p class="text-xs font-bold main-text-color">customer Name</p>
              </div>

              <div class="flex justify-between">
                <p class="text-sm main-text-color">53</p>
                <p class="text-sm main-text-color">Gamma Spark Updated</p>
              </div>
            </div>
          </section>
          <hr class="line" />

          <section class="ml-5 mr-5">
            <div class="">
              <div class="flex justify-between">
                <p class="text-xs font-bold main-text-color">customer phone</p>
                <p class="text-xs font-bold main-text-color">customer email</p>
              </div>

              <div class="flex justify-between">
                <p class="text-sm main-text-color">770880990</p>
                <p class="text-sm main-text-color">gammasparks@gmail.com</p>
              </div>
            </div>
          </section>
          <hr class="line" />

          <section class="ml-5 mr-5">
            <div class="">
              <div class="flex justify-between">
                <p class="text-xs font-bold main-text-color">Source Account</p>
                <p class="text-xs font-bold main-text-color">
                  Settlement Account
                </p>
              </div>

              <div class="flex justify-between">
                <p class="text-sm uppercase main-text-color">
                  coronation merchantt bank
                </p>
                <p class="text-sm main-text-color">Not Available</p>
              </div>
              <p class="text-sm main-text-color">Load Test Account</p>
            </div>
          </section>
          <hr class="line" />
          <section class="ml-5 mr-5 mb-5">
            <div class="">
              <div class="flex justify-between">
                <p class="text-xs font-bold main-text-color">
                  Transaction Date
                </p>
                <p class="text-xs font-bold main-text-color">
                  Status Description
                </p>
              </div>

              <div class="flex justify-between">
                <p class="text-sm main-text-color">
                  Wednesdav. March 22nd 2023. 4:03:29 pm
                </p>
                <p class="text-sm transaction-text-color">Successful</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div class="border border-transparent bg-white rounded-lg">
        <div>
          <section class="ml-5 mt-5 mr-5">
            <div class="flex justify-between">
              <p class="font-bold main-text-color">Transaction Logs</p>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#188475"
                  class="size-5 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>

                <p class="font-bold text-xs transaction-text-color">
                  Resend callback
                </p>
              </div>
            </div>
          </section>

          <hr class="line" />

          <section class="flex mt-10 ml-5">
            <div class="mr-3">
              <div class="w-3 h-3 first-circle rounded-full"></div>
              <div class="w-[2px] h-20 line-in-between ml-1"></div>
              <div class="w-3 h-3 second-circle rounded-full"></div>
            </div>

            <div>
              <p class="text-xs font-bold main-text-color">
                Transaction initiated
              </p>
              <p class="mb-3 main-text-color">
                Wednesdav. March 22nd 2023. 4:03:29 pm
              </p>
              <p class="text-xs font-bold main-text-color">
                Callback sent response code: 429
              </p>
              <p class="main-text-color">
                Thursday. March 23rd 2023. 4:03:29 am
              </p>
            </div>
          </section>

          <div
            class="border border-transparent rounded-lg w-[200px] pt-2 pb-2 mb-5 ml-5 mt-5 pl-2 pr-2 line-in-between"
          >
            <p class="text-xs">+ { /* Click to view response */ }</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.line {
  border: none;
  border-top: 2px solid #eef0f1;
  width: 90%;
  margin-top: 20px;
  margin-left: 15px;
}

.transaction-text-color {
  color: #188475;
}

.main-text-color {
  color: #343434;
}

.main-background {
  background: #eef0f1;
  width: 100vw;
}

.first-circle {
  background: #eb8b1e;
}

.second-circle {
  background: #188475;
}

.line-in-between {
  background: #eef0f1;
}

.grid {
  display: grid;
  gap: 1rem 4rem;
  justify-content: center;
  align-items: center;
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
@media screen and (min-width: 1034px) {
  .grid--1x2 {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

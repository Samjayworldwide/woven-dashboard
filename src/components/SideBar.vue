<script>
export default {
  data() {
    return {
      activeItem: 2,
    };
  },
  methods: {
    setActiveItem(item) {
      this.activeItem = item;
    },
  },
};
</script>
<template>
  <div
    class="side-bar-background border-2 border-transparent flex-col"
  >
    <div class="mb-10 mt-10">
      <div
        class="profile-background flex ml-2 mr-3 pt-5 pb-5 pl-3 pr-3 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="size-10 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <div>
          <p class="text-white text-sm">Gamma Spark Updated</p>
          <p class="text-white text-sm">sammyfish007@gmail.com</p>
        </div>
      </div>
    </div>

    <ul class="ml-5 mb-10">
      <li class="flex mb-5 cursor-pointer" @click="setActiveItem(1)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="activeItem === 1 ? '#79242f' : '#646668'"
          class="size-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        <p
          :class="{
            'text-[#79242f]': activeItem === 1,
            'text-[#646668]': activeItem !== 1,
          }"
          class="text-sm"
        >
          Get started
        </p>
      </li>

      <li class="flex cursor-pointer" @click="setActiveItem(2)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="activeItem === 2 ? '#79242f' : '#646668'"
          class="size-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
          />
        </svg>
        <p
          :class="{
            'text-[#79242f]': activeItem === 2,
            'text-[#646668]': activeItem !== 2,
          }"
          class="text-sm"
        >
          Dashboard
        </p>
      </li>
    </ul>

    <h3 class="text-xl ml-5 mb-10 uppercase side-text-color">Payments</h3>

    <ul class="ml-5 mb-10">
      <li class="flex mb-5 cursor-pointer" @click="setActiveItem(3)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="activeItem === 3 ? '#79242f' : '#646668'"
          class="size-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>

        <p
          :class="{
            'text-[#79242f]': activeItem === 3,
            'text-[#646668]': activeItem !== 3,
          }"
          class="text-sm"
        >
          Transactions
        </p>
      </li>
      <li class="flex mb-5 cursor-pointer" @click="setActiveItem(4)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="activeItem === 4 ? '#79242f' : '#646668'"
          class="size-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>

        <p
          :class="{
            'text-[#79242f]': activeItem === 4,
            'text-[#646668]': activeItem !== 4,
          }"
          class="text-sm"
        >
          People
        </p>
      </li>

      <li class="flex mb-5 cursor-pointer" @click="setActiveItem(5)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="activeItem === 5 ? '#79242f' : '#646668'"
          class="size-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
          />
        </svg>
        <p
          :class="{
            'text-[#79242f]': activeItem === 5,
            'text-[#646668]': activeItem !== 5,
          }"
          class="text-sm"
        >
          Settlements
        </p>
      </li>

      <li class="flex mb-5 cursor-pointer" @click="setActiveItem(6)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="activeItem === 6 ? '#79242f' : '#646668'"
          class="size-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
          />
        </svg>
        <p
          :class="{
            'text-[#79242f]': activeItem === 6,
            'text-[#646668]': activeItem !== 6,
          }"
          class="text-sm"
        >
          Payouts
        </p>
      </li>
      <li class="flex mb-5 cursor-pointer" @click="setActiveItem(7)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="activeItem === 7 ? '#79242f' : '#646668'"
          class="size-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
        <p
          :class="{
            'text-[#79242f]': activeItem === 7,
            'text-[#646668]': activeItem !== 7,
          }"
          class="text-sm"
        >
          VNUBANs
        </p>
      </li>

      <li class="flex mb-5 cursor-pointer" @click="setActiveItem(8)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="activeItem === 8 ? '#79242f' : '#646668'"
          class="size-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
          />
        </svg>
        <p
          :class="{
            'text-[#79242f]': activeItem === 8,
            'text-[#646668]': activeItem !== 8,
          }"
          class="text-sm"
        >
          Subaccounts
        </p>
      </li>

      <li class="flex mb-5 cursor-pointer" @click="setActiveItem(9)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="activeItem === 9 ? '#79242f' : '#646668'"
          class="size-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
          />
        </svg>
        <p
          :class="{
            'text-[#79242f]': activeItem === 9,
            'text-[#646668]': activeItem !== 9,
          }"
          class="text-sm"
        >
          DD Mandates
        </p>
      </li>
    </ul>

    <p class="text-xl uppercase ml-5 mb-10 side-text-color">others</p>

    <ul class="ml-5 mb-10">
      <li class="flex mb-5 cursor-pointer" @click="setActiveItem(10)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="activeItem === 10 ? '#79242f' : '#646668'"
          class="size-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
          />
        </svg>
        <p
          :class="{
            'text-[#79242f]': activeItem === 10,
            'text-[#646668]': activeItem !== 10,
          }"
          class="text-sm"
        >
          Audit Trails
        </p>
      </li>

      <li class="flex mb-5 cursor-pointer" @click="setActiveItem(11)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="activeItem === 11 ? '#79242f' : '#646668'"
          class="size-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
        <p
          :class="{
            'text-[#79242f]': activeItem === 11,
            'text-[#646668]': activeItem !== 11,
          }"
          class="text-sm"
        >
          Teams
        </p>
      </li>

      <li class="flex mb-20 cursor-pointer" @click="setActiveItem(12)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="activeItem === 12 ? '#79242f' : '#646668'"
          class="size-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
        <p
          :class="{
            'text-[#79242f]': activeItem === 12,
            'text-[#646668]': activeItem !== 12,
          }"
          class="text-sm"
        >
          Development
        </p>
      </li>
    </ul>

    <ul class="ml-5 mb-10">
      <li class="flex mb-5 cursor-pointer" @click="setActiveItem(13)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="activeItem === 13 ? '#79242f' : '#646668'"
          class="size-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <p
          :class="{
            'text-[#79242f]': activeItem === 13,
            'text-[#646668]': activeItem !== 13,
          }"
          class="text-sm"
        >
          Settings
        </p>
      </li>

      <li class="flex mb-20 cursor-pointer" @click="setActiveItem(14)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="activeItem === 14 ? '#79242f' : '#646668'"
          class="size-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
          />
        </svg>

        <p
          :class="{
            'text-[#79242f]': activeItem === 14,
            'text-[#646668]': activeItem !== 14,
          }"
          class="text-sm"
        >
          Logout
        </p>
      </li>
    </ul>
  </div>
</template>

<style>
.profile-background {
  background-color: #79242f;
}

.side-text-color {
  color: #646668;
}

.side-bar-background {
  background: linear-gradient(
    to left,
    rgba(204, 255, 250, 0.25),
    rgba(255, 252, 245, 0.25),
    rgba(255, 229, 233, 0.25)
  );
}

.text-active {
  color: #79242f;
}
.active-item {
  color: #79242f;
}
</style>

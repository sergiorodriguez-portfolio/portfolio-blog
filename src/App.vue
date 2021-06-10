<template>
  <div id="app" class="min-h-screen bg-gradient-to-t from-gray-700 to-gray-400">
    <!-- HEADER -->
    <header class="text-gray-900 body-font">
      <div
        class="container flex flex-col flex-wrap items-center p-5 mx-auto  md:flex-row"
      >
        <a
          class="flex items-center mb-4 font-medium text-gray-900  title-font md:mb-0"
        >
          <span class="ml-3 text-4xl text-white font-handwritten"
            >sergiorodriguez.dev</span
          >
        </a>
        <nav
          class="flex flex-wrap items-center justify-center text-base  md:ml-auto font-barlow"
        >
          <a class="mr-5 hover:text-white">Work</a>
          <a class="mr-5 hover:text-white">Skills</a>
          <a class="mr-5 hover:text-white">About me</a>
          <a class="mr-5 hover:text-white">Contact</a>
        </nav>
      </div>
    </header>

    <!-- MAIN -->
    <router-view class="container mx-auto" />

    <!-- FOOTER -->
    <footer />
  </div>
</template>

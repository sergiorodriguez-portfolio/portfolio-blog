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
          <span
            class="ml-3 text-4xl text-white underline  lg:text-5xl font-handwritten text-shadow"
            >sergiorodriguez.dev</span
          >
        </a>
        <nav
          class="flex flex-wrap items-center justify-center text-2xl text-white  md:ml-auto font-barlow text-shadow"
        >
          <a href="#" class="mr-5">Work</a>
          <a href="#" class="mr-5">Skills</a>
          <a href="#" class="mr-5">About me</a>
          <a href="#" class="mr-5">Contact</a>
        </nav>
      </div>
    </header>

    <!-- MAIN -->
    <router-view class="container mx-auto" />

    <!-- FOOTER -->
    <footer />
  </div>
</template>

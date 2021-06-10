<template>
  <div id="app" class="min-h-screen bg-gradient-to-t from-gray-700 to-gray-400">
    <!-- HEADER -->
    <!-- <header
      class="px-4 py-4 bg-white shadow-xl sm:px-6 md:px-8 lg:px-10 xl:px-12"
    >
      <div class="flex justify-between">
        <a href="/"><p>sergiorodriguez.dev</p></a>
        <nav>
          <ul class="flex space-x-8">
            <li><a href="#">Work</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header> -->
    <header class="text-gray-600 body-font">
      <div
        class="container flex flex-col flex-wrap items-center p-5 mx-auto  md:flex-row"
      >
        <a
          class="flex items-center mb-4 font-medium text-gray-900  title-font md:mb-0"
        >
          <span class="ml-3 text-xl">sergiorodriguez.dev</span>
        </a>
        <nav
          class="flex flex-wrap items-center justify-center text-base  md:ml-auto"
        >
          <a class="mr-5 hover:text-gray-900">Work</a>
          <a class="mr-5 hover:text-gray-900">Skills</a>
          <a class="mr-5 hover:text-gray-900">About me</a>
          <a class="mr-5 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>

    <!-- MAIN -->
    <router-view class="container mx-auto" />

    <!-- FOOTER -->
    <footer />
  </div>
</template>

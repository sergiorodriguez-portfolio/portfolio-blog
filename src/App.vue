<template>
  <div id="app" class="min-h-screen bg-gradient-to-t from-gray-700 to-gray-400">
    <!-- HEADER -->
    <header class="text-gray-900 bg-gray-800 shadow-xl body-font">
      <div
        class="container flex flex-col flex-wrap items-center pt-2 pb-5 mx-auto  md:flex-row"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center mb-4 font-medium text-gray-900  title-font md:mb-0"
        >
          <span
            class="ml-3 text-4xl text-gray-100 underline  lg:text-5xl font-handwritten"
            >sergiorodriguez.dev</span
          >
        </router-link>
        <nav
          class="flex flex-wrap items-center justify-center mt-4 space-x-6 text-xl text-gray-200  md:ml-auto font-barlow"
        >
          <a href="#" class="hover:underline">Work</a>
          <a href="#" class="hover:underline">Skills</a>
          <a href="#" class="hover:underline">About me</a>
          <a href="#" class="hover:underline">Contact</a>
        </nav>
      </div>
    </header>

    <!-- MAIN -->
    <router-view class="container mx-auto" />

    <!-- FOOTER -->
    <footer class="text-gray-600 bg-gray-50 body-font">
      <div
        class="container flex flex-col items-center px-5 py-6 mx-auto  sm:flex-row"
      >
        <a
          class="flex items-center justify-center font-medium text-gray-900  title-font md:justify-start"
        >
          <span class="ml-3 text-xl">sergiorodriguez.dev</span>
        </a>
        <p
          class="mt-4 text-sm text-gray-500  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0"
        >
          {{ new Date().getFullYear() }}
        </p>
        <span
          class="inline-flex justify-center mt-4  sm:ml-auto sm:mt-0 sm:justify-start"
        >
          <a
            href="https://www.linkedin.com/in/sergio-rodriguez-ortiz/"
            class="text-gray-500"
          >
            <icon-linkedin />
          </a>
          <a href="https://github.com/sergrodrig" class="ml-3 text-gray-500">
            <icon-github />
          </a>
          <a
            href="https://www.facebook.com/sergiorodriguezdev/"
            class="ml-3 text-gray-500"
          >
            <icon-facebook />
          </a>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
  import IconLinkedin from "@/components/IconLinkedin"
  import IconFacebook from "@/components/IconFacebook"
  import IconGithub from "@/components/IconGithub"

  export default {
    name: "Home",
    components: {
      IconLinkedin,
      IconFacebook,
      IconGithub
    }
  }
</script>

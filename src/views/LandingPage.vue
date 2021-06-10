<template>
  <div class="container px-6 mx-auto font-mono text-white">
    <!-- HERO -->
    <section class="py-20 font-sans">
      <h1 class="mt-6 text-5xl font-thin font-barlow lg:text-6xl w-6/6">
        <p>Hi there!</p>
        <p>My name is Sergio Rodriguez.</p>
      </h1>
      <h2 class="w-10/12 mt-3 font-thin m d:w-8/12 lg:w-6/12 xl:w-5/12">
        <p class="mt-4">
          👋 I'm a self-made FullStack developer with focus on design and
          usability. My desire is to make beauty and practical web apps to solve
          real life problems.
        </p>
        <p class="mt-4">
          Browse my latest projects
          <a href="#below"><span class="font-medium">below</span></a>
          , view my
          <a
            href="https://drive.google.com/file/d/1Y3DkBsE-Y-IQ4KKHhAHf7lRP3hXHqkve/view?usp=sharing"
          >
            <span class="font-medium">resume</span></a
          >
          , or
          <a href="#"><span class="font-medium">say hey.</span></a>
        </p>
      </h2>
    </section>

    <!-- CARDS DE LOS PROYECTOS -->
    <section id="below" class="py-12 space-y-24 font-sans lg:space-y-12">
      <!-- card de proyecto -->
      <article class="grid grid-cols-12 gap-4">
        <!-- imagen -->
        <img
          src="app_image_sudoers.jpg"
          alt="project image"
          class="col-span-12 overflow-hidden shadow-md md:col-span-6 rounded-xl"
        />
        <!-- texto -->
        <div class="col-span-12 md:col-span-6">
          <div class="flex flex-col md:ml-4">
            <h3 class="text-2xl font-medium font-barlow">
              <a href="https://www.sudoers.cl/">www.sudoers.cl</a>
            </h3>
            <p class="mt-2 font-extralight font-roboto">
              Sudoers is my personal business. With a couple of former
              colleagues, we made this enterprise to became independent.
            </p>
            <div class="flex mt-4 space-x-3">
              <icon-wordpress class="w-12 p-2 rounded bg-gray-50" />
              <icon-mysql class="w-12 p-2 rounded bg-gray-50" />
              <icon-bitnami class="w-12 p-2 rounded bg-gray-50" />
              <icon-aws class="w-12 p-2 rounded bg-gray-50" />
              <icon-lightsail class="w-12 p-2 rounded bg-gray-50" />
            </div>
          </div>
        </div>
      </article>
      <!-- card de proyecto -->
      <article class="grid grid-cols-12 gap-4">
        <!-- imagen -->
        <img
          src="app_image_telbook.jpg"
          alt="project image"
          class="col-span-12 overflow-hidden shadow-md md:col-span-6 rounded-xl"
        />
        <!-- texto -->
        <div class="col-span-12 md:col-span-6">
          <div class="flex flex-col md:ml-4">
            <h3 class="text-2xl font-medium font-barlow">
              <a href="http://telbook.cl/">www.telbook.cl</a>
            </h3>
            <p class="mt-2 font-extralight font-roboto">
              Telbook is a SaaS to manage physical school books in a digital
              way, according to the government guidelines.
            </p>
            <div class="flex mt-4 space-x-3">
              <icon-vue class="w-12 p-2 rounded bg-gray-50" />
              <icon-tailwind class="w-12 p-2 rounded bg-gray-50" />
              <icon-heroku class="w-12 p-2 rounded bg-gray-50" />
            </div>
          </div>
        </div>
      </article>
      <!-- card de proyecto -->
      <article class="grid grid-cols-12 gap-4">
        <!-- imagen -->
        <img
          src="app_image_bpc.jpg"
          alt="project image"
          class="col-span-12 overflow-hidden shadow-md md:col-span-6 rounded-xl"
        />
        <!-- texto -->
        <div class="col-span-12 md:col-span-6">
          <div class="flex flex-col md:ml-4">
            <h3 class="text-2xl font-medium font-barlow">
              <a href="https://www.bpc.zone/">www.bpc.zone</a>
            </h3>
            <p class="mt-2 font-extralight font-roboto">
              In BPC.zone i use to hangout with my friends to play online
              videogames. Specially Call of Duty.
            </p>
            <div class="flex mt-4 space-x-3">
              <icon-nuxt class="w-12 p-2 rounded bg-gray-50" />
              <icon-keystone class="w-12 p-2 rounded bg-gray-50" />
              <icon-mongo class="w-12 p-2 rounded bg-gray-50" />
              <icon-tailwind class="w-12 p-2 rounded bg-gray-50" />
              <icon-heroku class="w-12 p-2 rounded bg-gray-50" />
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
  import IconAws from "@/components/IconAws"
  import IconBitnami from "@/components/IconBitnami"
  import IconHeroku from "@/components/IconHeroku"
  import IconKeystone from "@/components/IconKeystone"
  import IconLightsail from "@/components/IconLightsail"
  import IconMongo from "@/components/IconMongo"
  import IconMysql from "@/components/IconMysql"
  import IconNuxt from "@/components/IconNuxt"
  import IconTailwind from "@/components/IconTailwind"
  import IconVue from "@/components/IconVue"
  import IconWordpress from "@/components/IconWordpress"

  export default {
    name: "Home",
    components: {
      IconAws,
      IconBitnami,
      IconHeroku,
      IconKeystone,
      IconLightsail,
      IconMongo,
      IconMysql,
      IconNuxt,
      IconTailwind,
      IconVue,
      IconWordpress
    }
  }
</script>

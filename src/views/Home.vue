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
          <a href="#"><span class="font-medium">below</span></a>
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
    <section class="py-12 space-y-12 font-sans">
      <!-- card de proyecto -->
      <article class="grid grid-cols-12 gap-4">
        <!-- imagen -->
        <img
          src="sudoers.jpg"
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
          </div>
        </div>
      </article>
      <!-- card de proyecto -->
      <article class="grid grid-cols-12 gap-4">
        <!-- imagen -->
        <img
          src="telbook.jpg"
          alt="project image"
          class="col-span-12 overflow-hidden shadow-md md:col-span-6 rounded-xl"
        />
        <!-- texto -->
        <div class="col-span-12 md:col-span-6">
          <div class="flex flex-col md:ml-4">
            <h3 class="text-2xl font-medium font-barlow">
              <a href="https://www.sudoers.cl/">www.telbook.cl</a>
            </h3>
            <p class="mt-2 font-extralight font-roboto">
              Telbook is a SaaS to manage physical school books in a digital
              way, according to the government guidelines.
            </p>
          </div>
        </div>
      </article>
      <!-- card de proyecto -->
      <article class="grid grid-cols-12 gap-4">
        <!-- imagen -->
        <img
          src="bpc.jpg"
          alt="project image"
          class="col-span-12 overflow-hidden shadow-md md:col-span-6 rounded-xl"
        />
        <!-- texto -->
        <div class="col-span-12 md:col-span-6">
          <div class="flex flex-col md:ml-4">
            <h3 class="text-2xl font-medium font-barlow">
              <a href="https://www.sudoers.cl/">www.bpc.zone</a>
            </h3>
            <p class="mt-2 font-extralight font-roboto">
              In BPC.zone i use to hangout with my friends to play online
              videogames. Specially Call of Duty.
            </p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

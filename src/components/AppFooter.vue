<template>
  <footer class="container py-64 lg:py-96 text-center">
    <h3 class="text-sm lg:text-md font-semibold mb-32">Stay in touch</h3>
    <nav class="flex items-center justify-center mb-32">
      <a
        href="https://dribbble.com/pixelcrook"
        target="_blank"
        rel="noopener"
        title="Samuel Horn on Dribbble"
      >
        <Dribbble class="h-32 w-32 mx-8" />
        <span class="sr-only">Dribbble</span>
      </a>
      <a
        href="https://www.facebook.com/pixelcrook"
        target="_blank"
        rel="noopener"
        title="Samuel Horn on Facebook"
      >
        <Facebook class="h-32 w-32 mx-8" />
        <span class="sr-only">Facebook</span>
      </a>
      <a
        href="https://github.com/samuelhorn"
        target="_blank"
        rel="noopener"
        title="Samuel Horn on Github"
      >
        <Github class="h-32 w-32 mx-8" />
        <span class="sr-only">Github</span>
      </a>
      <a
        href="https://www.instagram.com/pixelcrook/"
        target="_blank"
        rel="noopener"
        title="Samuel Horn on Instagram"
      >
        <Instagram class="h-32 w-32 mx-8" />
        <span class="sr-only">Instagram</span>
      </a>
      <a
        href="https://www.linkedin.com/in/samuel-horn-af-rantzien-b170425/"
        target="_blank"
        rel="noopener"
        title="Samuel Horn on LinkedIn"
      >
        <LinkedIn class="h-32 w-32 mx-8" />
        <span class="sr-only">LinkedIn</span>
      </a>
      <a
        href="https://twitter.com/pixelcrook"
        target="_blank"
        rel="noopener"
        title="Samuel Horn on Twitter"
      >
        <Twitter class="h-32 w-32 mx-8" />
        <span class="sr-only">Twitter</span>
      </a>
      <a
        href="https://kalmar.social/@samuel"
        target="_blank"
        rel="me"
        title="Samuel Horn on Mastodon"
      >
        <Mastodon class="h-32 w-32 mx-8" />
        <span class="sr-only">Mastodon</span>
      </a>
    </nav>
    <a
      href="mailto:samuel@samuelhorn.com"
      class="opacity-75 leading-32 block"
      title="Say hello"
    >
      samuel@samuelhorn.com
    </a>
  </footer>
</template>

<script>
import Dribbble from "~/assets/svg/Dribbble.svg";
import Facebook from "~/assets/svg/Facebook.svg";
import Github from "~/assets/svg/Github.svg";
import Instagram from "~/assets/svg/Instagram.svg";
import LinkedIn from "~/assets/svg/LinkedIn.svg";
import Twitter from "~/assets/svg/Twitter.svg";

export default {
  components: {
    Dribbble,
    Facebook,
    Github,
    Instagram,
    LinkedIn,
    Twitter,
  },
};
</script>

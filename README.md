# Abner **Portfolio**

## Welcome! 👋

## Table of contents

- [Overview](#overview)
  - [Link](#link)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Link

- Live Site URL: [Live site URL](https://abneribeiro.vercel.app/)

## My process

### Built with

- Nextjs
- React-icons
- React-typewriter-simple

### What I learned

This is my first project with nextjs, and I learned a lot things.
I had  some problems to make image fill available space without specifying height or width - `next/image`, but i discovered with a few lines of CSS you can get around this. Thus your images will fill all the available space in the div.
```css
.container_img {
  width: 100%;
}

.image {
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
  max-width: 100% !important;
}

.container_img > span{
  position: unset !important;
}
```

```js
import React, { useState } from "react";
function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

```

### Continued development

I'll be updating the portfolio with other projects. I still needed to perfect my layout and maybe fix some bugs 💝

## Author

- Instagram - [@ab_hiner](https://github.com/ab_hiner)
- Twitter - [@AbhineRibeiro](https://twitter.com/AbhineRibeiro)

Thanks for checking out this project.

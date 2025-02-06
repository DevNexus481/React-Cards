# React Card Component

This document explains the `Card` component implemented in React.

## Overview

The `Card` component is a functional React component that displays a card with an image, a title, and a description. It uses Tailwind CSS for styling.

## Code Explanation

```javascript
import React from "react";

function Card() {
  return (
    <div className="w-full h-screen bg-zinc-200">
      <div className=" w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden">
        <div className="w-full h-32 bg-zinc-300">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QW1hem9ufGVufDB8fDB8fHww"
            alt=""/>
        </div>
        <div className="w-full px-3 py-4">
          <h2 className="font-semibold">Amazon Basics.</h2>
          <p className="text-xs mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur molestiae cupiditate excepturi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
Importing React
The component begins by importing React from the react library.

JavaScript
import React from "react";
Functional Component Definition
The Card component is defined as a functional component.

JavaScript
function Card() {
Main Container
The main container div occupies the full width and height of the screen and has a background color of bg-zinc-200.

JavaScript
<div className="w-full h-screen bg-zinc-200">
Card Container
The card container is centered on the screen using absolute positioning and translation. It has a width of w-52, background color of bg-zinc-100, and rounded corners rounded-md. It also has overflow-hidden to ensure that any overflow content is hidden.

JavaScript
<div className=" w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden">
Image Container
The image container has a fixed height of h-32 and a background color of bg-zinc-300. The image inside it is set to cover the entire container using object-cover.

JavaScript
<div className="w-full h-32 bg-zinc-300">
  <img
    className="w-full h-full object-cover"
    src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QW1hem9ufGVufDB8fDB8fHww"
    alt=""/>
</div>
Content Container
The content container includes a title and a description. The title is styled with font-semibold, and the description is styled with text-xs and has a top margin of mt-5.

JavaScript
<div className="w-full px-3 py-4">
  <h2 className="font-semibold">Amazon Basics.</h2>
  <p className="text-xs mt-5">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Consectetur molestiae cupiditate excepturi.
  </p>
</div>
Exporting the Component
Finally, the Card component is exported for use in other parts of the application.

JavaScript
export default Card;
Conclusion
The Card component is a simple and reusable UI component that uses Tailwind CSS for styling. It demonstrates how to use Tailwind's utility classes to create a responsive and visually appealing card layout.
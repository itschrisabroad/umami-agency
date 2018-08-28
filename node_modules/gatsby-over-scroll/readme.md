# gatsby over-scroll

A fork of React Overscroll by sinnerschrader to make it compatible with Gatsby server-side rendering, mainly by removing
references to window in the constructor.

[API Documentation](https://sinnerschrader.github.io/react-over-scroll/api/)  
[Demo](https://sinnerschrader.github.io/react-over-scroll/)

```
npm install react-over-scroll
```

## Description
OverScroll is a slide-show or content-slider, call it what you want. It is a full-screen/viewport element that snaps into fixed mode when it reaches the viewports top edge. Scrolling is now translated to paging, switching the content each time a predefined scroll amount has been reached. During an active slide two values are available. (See [Render](https://github.com/sinnerschrader/react-over-scroll/#render) for more information). Take a look at the [Demo](https://sinnerschrader.github.io/react-over-scroll/) to get a better understanding of the behavior.

## Render

The children of OverScroll expect a function which is called with two arguments.

### Example 1
```jsx
const renderSlide = (slide, percent) => (
  <div>
    <div>You are on Slide {slide + 1}</div>
    <div>{percent}% of this slide has been scrolled</div>
  </div>
)
// Usage
// <OverScroll slides={10} children={renderSlide} />
```

### Example 2
```jsx
const pages = [<div>Hello</div>,<div>World</div>]
const slider = (
  <OverScroll slides={pages.length}>
    {(page, progress) => (
      <div>
        <section>
          {pages[page]}
        </section>
        <footer>
          <div>Page {page + 1}</div>
          <div>
            <span style={{
              width: `${progress}%`,
              height: 10,
              background: 'currentcolor'
            }}/>
          </div>
        </footer>
      </div>
    )}
  </OverScroll>
)
// Usage
// {slider}
```

## Development

If you want to build this module from source or contribute to this project you
should follow the steps listed below.

### Setup

```shell
npm install
```

### Run dev server

```shell
npm start
```

### Watch for file changes

```shell
npm run watch
```

Known issues: CSS does not work with livereload and requires a manual browser reload.

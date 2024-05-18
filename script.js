// document.addEventListener("DOMContentLoaded", () => {
//     const featuredBlogContainer = document.getElementById('featured-blog');
//     const smallBlogsContainer = document.getElementById('small-blogs');
  
//     fetch('https://coding-week-2024-api.onrender.com/api/data')
//       .then(response => response.json())
//       .then(data => {
//         const blogs = data.blogs;
  
//         // Render Featured Blog
//         const featuredBlog = blogs.find(blog => blog.type.includes('featured'));
//         if (featuredBlog) {
//           featuredBlogContainer.innerHTML = `
//             <h2>${featuredBlog.headline}</h2>
//             <img src="${featuredBlog.image}" alt="Blog Image">
//             <p>By ${featuredBlog.author} on ${featuredBlog.date}</p>
//             <p>Type: featured, ${featuredBlog.type}</p>
//           `;
//         }
  
//         // Render Smaller Blogs
//         smallBlogsContainer.innerHTML = '';
//         blogs.forEach(blog => {
//           if (!blog.type.includes('featured')) {
//             smallBlogsContainer.innerHTML += `
//               <div class="blog-item">
//                 <h3>${blog.headline}</h3>
//                 <img src="${blog.image}" alt="Blog Image">
//                 <p>${blog.date}</p>
//               </div>
//             `;
//           }
//         });
  
//         // Add scroll functionality if needed
//         smallBlogsContainer.style.overflowY = 'scroll';
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   });

document.addEventListener('DOMContentLoaded', () => {
  const apiEndpoint = 'https://coding-week-2024-api.onrender.com/api/data';

  async function fetchBlogData() {
      try {
          const response = await fetch(apiEndpoint);
          const data = await response.json();
          renderBlogs(data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }

  function renderBlogs(data) {
      const featuredSection = document.querySelector('.submain');
      const smallBlogsSection = document.querySelector('.subsubtopic');

      // Clear existing content
      featuredSection.innerHTML = '';
      smallBlogsSection.innerHTML = '';

      // Render featured blogs (Section 1)
      data.slice(0, 4).forEach((blog, index) => {
          const blogHtml = `
              <div class="featured-blog">
                  <div class="box${index + 1}">
                      <div class="subbox1">
                          <div class="box1-1">
                              <div class="box1-1-1">${blog.type}</div>
                              <div class="box1-1-2">Featured</div>
                          </div>
                          <div class="box1-2">${blog.headline}</div>
                          <div class="box1-3">
                              <div class="box1-3-1"><img src="${blog.image}" alt="${blog.headline}" /></div>
                              <div class="box1-3-2">${blog.author}</div>
                              <i class="fa-regular fa-calendar"></i>
                              <div class="box1-3-3">${new Date(blog.date).toDateString()}</div>
                          </div>
                      </div>
                  </div>
              </div>
          `;
          featuredSection.insertAdjacentHTML('beforeend', blogHtml);
      });

      // Render smaller blogs (Section 2)
      data.slice(4).forEach(blog => {
          const blogHtml = `
              <div class="subtopic1">
                  <div class="subtopic1-img" style="background-image: url('${blog.image}');"></div>
                  <div class="subtopic1-content">
                      <div class="div1">${blog.headline}</div>
                      <div class="div2"><i class="fa-regular fa-calendar"></i><p>${new Date(blog.date).toDateString()}</p></div>
                  </div>
              </div>
          `;
          smallBlogsSection.insertAdjacentHTML('beforeend', blogHtml);
      });
  }

  fetchBlogData();
});

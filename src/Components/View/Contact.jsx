import React from "react";

export default function Contact() {
  return (
    <div className="contact-form">
      <div className="card-body">
        <div class="d-flex align-items-start justify-content-between">
          <a class="text-decoration-none" href="/real-estate/vendor-properties">
            <div
              class="d-flex mb-2"
              // style="width: 60px;"
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: 100,
                  height: 100,
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: 200,
                }}
              >
                <img
                  alt="Avatar"
                  src="/User-avatar.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="rounded-circle w-100"
                  // style={{
                  //   position: "absolute",
                  //   inset: 0,
                  //   boxSizing: "border-box",
                  //   padding: 0,
                  //   border: "none",
                  //   margin: "auto",
                  //   display: "block",
                  //   width: 0,
                  //   height: 0,
                  // }}
                  // srcset="/User-avatar.svg 1000w , /User-avatar.svg 2x"
                />
              </span>
            </div>
            <h5 class="mb-1">Floyd Miles</h5>
            <div class="mb-1">
              <span class="star-rating">
                <i class="star-rating-icon fi-star-filled active"></i>
                <i class="star-rating-icon fi-star-filled active"></i>
                <i class="star-rating-icon fi-star-filled active"></i>
                <i class="star-rating-icon fi-star-filled active"></i>
                <i class="star-rating-icon fi-star-filled active"></i>
              </span>
              <span class="ms-1 fs-sm text-muted">(45 reviews)</span>
            </div>
            <p class="text-body">Imperial Property Group Agent</p>
          </a>
        </div>
        <ul class="list-unstyled border-bottom mb-4 pb-4">
          <li>
            <a href="tel:3025550107" class="nav-link fw-normal p-0">
              <i class="fi-phone mt-n1 me-2 align-middle opacity-60"></i>(302)
              555-0107
            </a>
          </li>
          <li>
            <a
              href="mailto:floyd_miles@email.com"
              class="nav-link fw-normal p-0"
            >
              <i class="fi-mail mt-n1 me-2 align-middle opacity-60"></i>
              floyd_miles@email.com
            </a>
          </li>
        </ul>
        <form novalidate="" class="">
          <div class="mb-3">
            <input placeholder="Your name*" required="" class="form-control" />
            <div class="invalid-feedback">Please enter your name!</div>
          </div>
          <div class="mb-3">
            <input
              placeholder="Email*"
              required=""
              type="email"
              class="form-control"
            />
            <div class="invalid-feedback">
              Please provide a valid email address!
            </div>
          </div>
          <div class="mb-3">
            <input placeholder="Phone" type="tel" class="form-control" />
          </div>
          <div class="mb-3">
            <div class="flex-nowrap input-group">
              <div class="react-datepicker-wrapper">
                <div class="react-datepicker__input-container">
                  <input
                    type="text"
                    placeholder="Choose date*"
                    class="rounded-end-0 form-control"
                    required=""
                    value=""
                  />
                </div>
              </div>
              <span class="input-group-text">
                <i class="fi-calendar"></i>
              </span>
            </div>
          </div>
          <div class="mb-3">
            <textarea
              rows="3"
              placeholder="Message"
              class="form-control"
              //   style="resize: none;"
            ></textarea>
          </div>
          <div class="mb-4 form-check">
            <input
              type="checkbox"
              id="subscribe"
              class="form-check-input"
              value="Subscribe me"
            />
            <label title="" for="subscribe" class="form-check-label">
              <span class="fs-sm">
                Send news, tips and promos from Finder to my email.
              </span>
            </label>
          </div>
          <button type="submit" class="w-100 btn btn-primary btn-lg">
            Send request
          </button>
        </form>
      </div>
    </div>
  );
}

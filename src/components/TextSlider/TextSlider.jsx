import React, { useRef, useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import "@splidejs/splide/css/sea-green";
import { Container } from "@mui/system";

import classes from "./textSlider.module.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDirectionThemeContext } from "../../Context/Direction";
const tags = [
  " الخوف من الظلام",
  "العلاقة بين الوالدين والابناء",
  "الفصام",
  "القلق",
  "الكذب",
  "الهلع",
  "الوسواس",
  "تربية الأطفال",
  "تعديل السلوك",
];
const TextSlider = ({ images, text }) => {
  const splideRef = useRef(null);
  const { isRtl } = useDirectionThemeContext();

  useEffect(() => {
    const splide = new Splide(splideRef.current, {
      arrows: true,
      arrowPath: "",
      prevArrow: '<button class="splide__arrow--prev">Previous</button>',
      nextArrow: '<button class="splide__arrow--next">Next</button>',
      type: "loop",
      autoplay: true,
      pagination: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      interval: 1500,
      perPage: 7,
      perMove: 1,
      direction: `${isRtl ? "rtl" : "ltr"}`,
      breakpoints: {
        1024: {
          perPage: 5,
        },
        768: {
          perPage: 3,
        },
        480: {
          perPage: 2,
        },
        350: {
          perPage: 1,
        },
      },
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, [isRtl]);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        border: "1px solid #e3f0fb",
        boxShadow: " 0px 3px 28px rgb(211 226 234 / 15%)",
        my: "30px",
      }}
    >
      <Container maxWidth="xl">
        <section
          ref={splideRef}
          className={`splide ${classes.splide}`}
          aria-label="Splide Basic HTML Example"
        >
          <div className="splide__track">
            <ul className="splide__list">
              {tags.map((tag, i) => (
                <li
                  key={i}
                  data-splide-interval="2000"
                  className={`splide__slide ${classes.splide__slide}`}
                >
                  <Typography fontSize={".9rem"} fontWeight="600">
                    {tag}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`splide__arrows ${classes.splide__arrows} ${classes.row_reverse}`}
          >
            <div
              className={`splide__arrow--prev  ${classes.splide__arrow__prev}`}
            >
              <IconButton>
                <ArrowLeftOutlined />
              </IconButton>
            </div>
            <div
              className={`splide__arrow--next  ${classes.splide__arrow__next}`}
            >
              <IconButton>
                <ArrowLeftOutlined />
              </IconButton>
            </div>
          </div>
        </section>
      </Container>
    </Box>
  );
};

export default TextSlider;

import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex direction="column" minHeight="10vh">
      <Box backgroundColor="gray.200" padding="4" textAlign="center">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-6 col-md-3 mb-3">
                <h5>HELP AND INFORMATION</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a
                      href="https://www.asos.com/customer-care/"
                      className="nav-link p-0 text-body-secondary"
                    >
                      Help
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="https://my.asos.com/identity/login?signin=bb84651f09a7ad7d24c241ef67dc45f9"
                      className="nav-link p-0 text-body-secondary"
                    >
                      Track order
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="https://www.asos.com/payments-and-deliveries/delivery/"
                      className="nav-link p-0 text-body-secondary"
                    >
                      Delivery & Returns
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="https://www.asos.com/sitemap/"
                      className="nav-link p-0 text-body-secondary"
                    >
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-3 mb-3">
                <h5>ABOUT ASOS</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a
                      href="https://www.asos.com/about/"
                      className="nav-link p-0 text-body-secondary"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="https://www.asoscareers.com/"
                      className="nav-link p-0 text-body-secondary"
                    >
                      Careers at ASOS
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="https://www.asosplc.com/fashion-with-integrity/"
                      className="nav-link p-0 text-body-secondary"
                    >
                      Corporate Responsibility
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="https://www.asosplc.com/"
                      className="nav-link p-0 text-body-secondary"
                    >
                      Investors site
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-4 mb-3">
                <h5>MORE FROM ASOS</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a
                      href="https://marketplace.asos.com/?ctaref=Global+footer"
                      className="nav-link p-0 text-body-secondary"
                    >
                      ASOS Marketplace
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="https://www.asos.com/gift-vouchers/?ctaref=global%20footer|gift%20vouchers"
                      className="nav-link p-0 text-body-secondary"
                    >
                      Gift Vouchers
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="https://www.asos.com/discover/black-friday-cyber-monday-deals/"
                      className="nav-link p-0 text-body-secondary"
                    >
                      Black Friday
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="https://thrift.plus/get-started-asos"
                      className="nav-link p-0 text-body-secondary"
                    >
                      ASOS x Thrift+
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </Box>
    </Flex>
  );
};

export default React.memo(Footer);

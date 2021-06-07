import React from "react"
import { useHover } from "../hooks/use-hover"
import { contactMail } from "../consts"
import { useClipboard } from "../hooks/use-clipboard"
import { useMobile } from "../hooks/use-mobile"

export function Layout({ children, home = false }) {
  const [hoverRef, isHover] = useHover()
  const { hasCopied, onCopy } = useClipboard(contactMail)
  const isMobile = useMobile()

  return (
    <>
      <header>
        <a href="/">
          <h2
            style={{
              // background: home ? "green" : "hsl(120 0% 65% / 1)",
              display: "inline-block",
              padding: 5,
              cursor: "pointer",
              lineHeight: "2rem",
              color: "blue",
              marginTop: "2rem",
              marginBottom: "2.5rem",
            }}
            ref={hoverRef}
          >
            {isHover ? "안녕 하세요," : "Hello,"}
            <br />
            <span
              style={{
                textDecoration: "underline",
              }}
            >
              I'm yongmin ruucm.
            </span>
          </h2>
        </a>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "4fr 1fr",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            WebkitWritingMode: "vertical-rl",
            MsWritingMode: "tb-rl",
            writingMode: "vertical-rl",
          }}
        >
          <div
            style={{
              position: "sticky",
              top: "10vh",
              display: "inline-block",
            }}
          >
            {!isMobile && (
              <>
                <a
                  onClick={onCopy}
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    display: "inline-block",
                    marginLeft: "4px",
                  }}
                >
                  {hasCopied ? "copied" : contactMail}
                </a>
                <br />
              </>
            )}
            <a
              href="http://twitter.com/ruucm"
              target="_blank"
              style={{
                textDecoration: "none",
                display: "inline-block",
                marginLeft: "4px",
              }}
            >
              @ruucm
            </a>
            <br />
            <a
              href="/about"
              style={{
                textDecoration: "none",
              }}
            >
              /about
            </a>
          </div>

          {/* <br /> */}
          {/* Navigation */}
          {/* <nav>
            <ul>
              <li>
                <Link href="/carving">
                  <a>Carving</a>
                </Link>
              </li>
              <li>
                <Link href="/media">
                  <a>Media</a>
                </Link>
              </li>
            </ul>
          </nav> */}
        </footer>
      </div>
    </>
  )
}

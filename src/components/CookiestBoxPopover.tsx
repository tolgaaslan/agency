import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import ButtonPrimary from "./Button/ButtonPrimary";
import { NC_SITE_SETTINGS } from "@/contains/site-settings";
import Link from "next/link";

export default function CookiestBoxPopover() {
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    if (localStorage?.accessCookies !== "ok") {
      setisOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.accessCookies = "ok";
    setisOpen(false);
  };

  const handleRemove = () => {
    localStorage.accessCookies = "no";
    setisOpen(false);
  };

  return (
    <>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="fixed bottom-4 sm:bottom-6 start-4 sm:start-6 z-20 w-72 sm:w-[21rem]">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="bg-white dark:bg-black px-4 sm:px-5 py-5 sm:py-7 text-xs grid">
              <span>
                Bu web sitesi daha iyi hizmet almanızı sağlamak için çerezleri kullanır. Detaylar için Çerez Politikalarını inceleyin.{" "}
                <Link
                  className="text-neutral-900 underline underline-offset-2 font-medium"
                  href={NC_SITE_SETTINGS.cookies_policy_page.uri || "#"}
                >
                  Çerez Politikaları
                </Link>
              </span>

              <ButtonPrimary
                className="!rounded-full mt-4"
                sizeClass="py-2 px-4 "
                fontSize="text-xs font-medium"
                onClick={handleAccept}
              >
                <span>Kabul Et</span>
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

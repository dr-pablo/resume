import { Tooltip, HStack } from "@chakra-ui/react";
import { SiTwitter, SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";

export function ConnectModal() {
  return (
    <HStack>
      <Tooltip
        color="white"
        label="LInkedIn Profile"
        closeDelay={200}
        placement="bottom"
      >
        <span>
          <SiLinkedin
            size={40}
            onClick={() =>
              window.open("https://www.linkedin.com/in/paul-murphy-24380314a/")
            }
          />
        </span>
      </Tooltip>
      <br />
      <Tooltip
        color="white"
        label="@0xTraderMans"
        closeDelay={200}
        placement="bottom"
      >
        <span>
          <SiTwitter
            size={40}
            onClick={() => window.open("https://twitter.com/0xTraderMans")}
          />
        </span>
      </Tooltip>
      <br />
      <Tooltip
        color="white"
        label="github@dr-pablo"
        closeDelay={200}
        placement="bottom"
      >
        <span>
          <SiGithub
            size={40}
            onClick={() => window.open("https://github.com/dr-pablo")}
          />
        </span>
      </Tooltip>
      <br />
      <Tooltip
        color="white"
        label="dusty bender alpha discord invite"
        closeDelay={200}
        placement="bottom"
      >
        <span>
          <SiDiscord
            size={40}
            onClick={() => window.open("https://discord.gg/WbH9ZJrYg3")}
          />
        </span>
      </Tooltip>
    </HStack>
  );
}

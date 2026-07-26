import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NewPage() {
  return (
    <Box>
      Back to{" "}
      <Link asChild>
        <NextLink href="/">Home</NextLink>
      </Link>
    </Box>
  );
}

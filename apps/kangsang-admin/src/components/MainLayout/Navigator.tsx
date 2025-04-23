"use client";

import { Breadcrumbs, Button, Typography } from "kangsang-mui";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Navigator() {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <Breadcrumbs sx={{ mb: 1 }}>
      {pathSegments.length != 0 && (
        <Typography
          key={`navigator-home`}
          variant="body2"
          onClick={() => router.push("/")}
          sx={{ cursor: "pointer", "&:hover": { opacity: 0.8 } }}
        >
          Home
        </Typography>
      )}

      {pathSegments.map((segment, index) => {
        const capitalizedSegment =
          segment.charAt(0).toUpperCase() + segment.slice(1);

        if (index === 0)
          return (
            <Typography key={`navigator-${segment}-${index}`} variant="body2">
              {capitalizedSegment}
            </Typography>
          );

        if (index === pathSegments.length - 1)
          return (
            <Typography
              key={`navigator-${segment}-${index}`}
              variant="body2"
              fontWeight="medium"
            >
              {capitalizedSegment}
            </Typography>
          );

        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

        return (
          <Typography
            key={`navigator-${segment}-${index}`}
            onClick={() => router.push(path)}
            variant="body2"
            sx={{ cursor: "pointer", "&:hover": { opacity: 0.8 } }}
          >
            {capitalizedSegment}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
}

export default Navigator;

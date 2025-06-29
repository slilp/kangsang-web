import React from "react";
import { render, screen, waitFor } from "@/utils/testUtil";

import CategoryViewPage from "../pages/CategoryViewPage";
import categoryApi from "@/services/category";
import { vi } from "vitest";

describe("CategoryViewPage", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should renders data correctly", async () => {
    const mockData = {
      data: [
        {
          id: 1,
          name: "Category 1",
          description: "Description 1",
          coverImage: "image1.jpg",
          updatedAt: "2025-06-29T00:00:00Z",
        },
        {
          id: 2,
          name: "Category 2",
          description: "Description 2",
          coverImage: "image2.jpg",
          updatedAt: "2025-06-29T00:00:00Z",
        },
      ],
      pagination: {
        totalRecords: 2,
        page: 1,
        limit: 20,
      },
    };
    vi.spyOn(categoryApi, "listCategory").mockResolvedValue(mockData);

    render(<CategoryViewPage />);

    expect(categoryApi.listCategory).toHaveBeenCalledWith(
      1,
      10,
      "updatedAt:desc"
    );

    await waitFor(() => {
      for (const item of mockData.data) {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      }
    });

    await waitFor(() => {
      for (const item of mockData.data) {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      }
    });
  });
});

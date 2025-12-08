import { NextRequest, NextResponse } from "next/server"
import { fetchSalesJobs } from "@/lib/theirstack"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const page = parseInt(searchParams.get("page") || "1")
  const location = searchParams.get("location") || undefined
  const remoteOnly = searchParams.get("remote") === "true"
  const searchQuery = searchParams.get("q") || undefined

  try {
    const { jobs, total } = await fetchSalesJobs({
      page,
      location,
      remoteOnly,
      searchQuery,
      perPage: 20,
    })

    return NextResponse.json({
      jobs,
      total,
      page,
      hasMore: page * 20 < total,
    })
  } catch (error) {
    console.error("Jobs API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    )
  }
}

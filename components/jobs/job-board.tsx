"use client"

import { useState, useEffect } from "react"
import { JobCard } from "./job-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  MapPin, 
  Loader2, 
  AlertCircle,
  Filter,
  X
} from "lucide-react"
import type { JobListing } from "@/lib/theirstack"

export function JobBoard() {
  const [jobs, setJobs] = useState<JobListing[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [total, setTotal] = useState(0)

  // Filters
  const [location, setLocation] = useState("")
  const [remoteOnly, setRemoteOnly] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const fetchJobs = async (pageNum: number, append = false) => {
    setLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams({
        page: pageNum.toString(),
        ...(location && { location }),
        ...(remoteOnly && { remote: "true" }),
        ...(searchQuery && { q: searchQuery }),
      })

      const response = await fetch(`/api/jobs?${params}`)
      
      if (!response.ok) {
        throw new Error("Failed to fetch jobs")
      }

      const data = await response.json()

      if (append) {
        setJobs((prev) => [...prev, ...data.jobs])
      } else {
        setJobs(data.jobs)
      }
      
      setTotal(data.total)
      setHasMore(data.hasMore)
    } catch (err) {
      setError("Unable to load jobs. Please check your API configuration.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs(1)
  }, [remoteOnly])

  const handleSearch = () => {
    setPage(1)
    fetchJobs(1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const handleLoadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    fetchJobs(nextPage, true)
  }

  const clearFilters = () => {
    setLocation("")
    setRemoteOnly(false)
    setSearchQuery("")
    setPage(1)
    fetchJobs(1)
  }

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate" />
            <Input
              type="text"
              placeholder="Search by job title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-10"
            />
          </div>

          {/* Location */}
          <div className="relative sm:w-48">
            <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate" />
            <Input
              type="text"
              placeholder="City or state"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-10"
            />
          </div>

          {/* Search Button */}
          <Button variant="electric" onClick={handleSearch} className="shrink-0">
            <Search className="h-4 w-4" />
            Search
          </Button>

          {/* Remote Toggle */}
          <Button
            variant={remoteOnly ? "emerald" : "outline"}
            onClick={() => setRemoteOnly(!remoteOnly)}
            className="shrink-0"
          >
            {remoteOnly && <X className="h-4 w-4" />}
            Remote Only
          </Button>
        </div>

        {/* Active Filters */}
        {(location || remoteOnly || searchQuery) && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate">Active filters:</span>
            {searchQuery && (
              <span className="inline-flex items-center gap-1 rounded-full bg-electric/10 px-3 py-1 text-sm text-electric">
                "{searchQuery}"
                <button onClick={() => { setSearchQuery(""); handleSearch() }} className="ml-1 hover:text-electric-dark">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {location && (
              <span className="inline-flex items-center gap-1 rounded-full bg-electric/10 px-3 py-1 text-sm text-electric">
                <MapPin className="h-3 w-3" />
                {location}
                <button onClick={() => { setLocation(""); handleSearch() }} className="ml-1 hover:text-electric-dark">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {remoteOnly && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald/10 px-3 py-1 text-sm text-emerald">
                Remote
                <button onClick={() => setRemoteOnly(false)} className="ml-1 hover:text-emerald-light">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            <button onClick={clearFilters} className="text-sm text-slate hover:text-midnight underline">
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Results Count */}
      {!loading && !error && (
        <p className="mb-6 text-sm text-slate">
          {total > 0 
            ? `Showing ${jobs.length} of ${total.toLocaleString()} tech sales jobs`
            : "No jobs found"
          }
        </p>
      )}

      {/* Loading State */}
      {loading && jobs.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16">
          <Loader2 className="h-8 w-8 animate-spin text-electric" />
          <p className="mt-4 text-slate">Loading jobs...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-coral/10">
            <AlertCircle className="h-8 w-8 text-coral" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-midnight">Unable to Load Jobs</h3>
          <p className="mt-2 text-sm text-slate max-w-md">
            {error}
          </p>
          <p className="mt-4 text-xs text-slate">
            Add THEIRSTACK_API_KEY to your environment variables.
            <br />
            Get a free key at{" "}
            <a href="https://theirstack.com" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">
              theirstack.com
            </a>
          </p>
        </div>
      )}

      {/* No Results */}
      {!loading && !error && jobs.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Filter className="h-12 w-12 text-slate" />
          <h3 className="mt-4 text-lg font-semibold text-midnight">No jobs found</h3>
          <p className="mt-2 text-sm text-slate">
            Try adjusting your filters or search terms.
          </p>
        </div>
      )}

      {/* Job Listings */}
      {!error && jobs.length > 0 && (
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      {/* Load More */}
      {hasMore && !loading && !error && (
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Load More Jobs"
            )}
          </Button>
        </div>
      )}
    </div>
  )
}

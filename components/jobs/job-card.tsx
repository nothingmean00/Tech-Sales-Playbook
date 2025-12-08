"use client"

import { ExternalLink, MapPin, DollarSign, Clock, Building2, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  formatSalary, 
  formatPostedDate, 
  formatFunding,
  formatEmployeeCount,
  type JobListing 
} from "@/lib/theirstack"

interface JobCardProps {
  job: JobListing
}

export function JobCard({ job }: JobCardProps) {
  const salary = formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency)
  const postedDate = formatPostedDate(job.postedAt)
  const funding = formatFunding(job.companyInfo?.totalFunding)
  const employees = formatEmployeeCount(job.companyInfo?.employeeCount)

  return (
    <div className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-lg hover:ring-electric/20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        {/* Job Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {job.remote && (
              <Badge variant="emerald" className="text-xs">Remote</Badge>
            )}
            {job.companyInfo?.fundingStage && (
              <Badge variant="gold" className="text-xs">{job.companyInfo.fundingStage}</Badge>
            )}
            {job.type === "contract" && (
              <Badge variant="outline" className="text-xs">Contract</Badge>
            )}
          </div>

          <div className="flex items-start gap-3">
            {/* Company Logo */}
            {job.companyLogo && (
              <img
                src={job.companyLogo}
                alt={`${job.company} logo`}
                className="h-12 w-12 rounded-lg object-contain bg-off-white p-1 shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            )}
            
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-midnight group-hover:text-electric transition-colors line-clamp-1">
                {job.title}
              </h3>

              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate">
                <span className="flex items-center gap-1 font-medium text-midnight">
                  <Building2 className="h-4 w-4" />
                  {job.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </span>
              </div>
            </div>
          </div>

          {/* Salary & Company Info */}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            {salary && (
              <span className="flex items-center gap-1 text-emerald font-medium">
                <DollarSign className="h-4 w-4" />
                {salary}
              </span>
            )}
            {funding && (
              <span className="flex items-center gap-1 text-gold">
                <TrendingUp className="h-4 w-4" />
                {funding}
              </span>
            )}
            {employees && (
              <span className="flex items-center gap-1 text-slate">
                <Users className="h-4 w-4" />
                {employees}
              </span>
            )}
          </div>

          {job.description && (
            <p className="mt-3 text-sm text-slate line-clamp-2">
              {job.description}
            </p>
          )}

          <div className="mt-3 flex items-center gap-1 text-xs text-slate">
            <Clock className="h-3 w-3" />
            {postedDate}
          </div>
        </div>

        {/* Apply Button */}
        <div className="shrink-0 sm:ml-4">
          <Button variant="electric" size="sm" asChild>
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              Apply
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

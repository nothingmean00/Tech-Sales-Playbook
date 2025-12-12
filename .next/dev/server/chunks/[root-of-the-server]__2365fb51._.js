module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/tech-sales-bible/lib/theirstack.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TheirStack Job Board API Integration
// Get your free API key at: https://theirstack.com
__turbopack_context__.s([
    "fetchSalesJobs",
    ()=>fetchSalesJobs,
    "formatEmployeeCount",
    ()=>formatEmployeeCount,
    "formatFunding",
    ()=>formatFunding,
    "formatPostedDate",
    ()=>formatPostedDate,
    "formatSalary",
    ()=>formatSalary
]);
const THEIRSTACK_API_KEY = process.env.THEIRSTACK_API_KEY;
const THEIRSTACK_BASE_URL = "https://api.theirstack.com/v1";
async function fetchSalesJobs(options) {
    const { page = 1, perPage = 20, location, remoteOnly = false, searchQuery } = options || {};
    if (!THEIRSTACK_API_KEY) {
        console.warn("TheirStack API key not configured");
        return {
            jobs: [],
            total: 0
        };
    }
    try {
        // Build request body for TheirStack
        const body = {
            page,
            per_page: perPage,
            // Search for sales-related roles at tech companies
            job_title_or: [
                "Sales Development Representative",
                "SDR",
                "BDR",
                "Business Development Representative",
                "Account Executive",
                "Inside Sales",
                "Sales Representative",
                "Enterprise Sales",
                "Mid-Market Sales"
            ],
            posted_at_max_age_days: 30,
            order_by: [
                {
                    desc: true,
                    field: "posted_at"
                }
            ]
        };
        if (location) {
            body.job_location_pattern = location;
        }
        if (remoteOnly) {
            body.remote = true;
        }
        if (searchQuery) {
            body.job_title_pattern = searchQuery;
        }
        const response = await fetch(`${THEIRSTACK_BASE_URL}/jobs/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${THEIRSTACK_API_KEY}`
            },
            body: JSON.stringify(body),
            next: {
                revalidate: 3600
            }
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error("TheirStack API error:", response.status, errorText);
            return {
                jobs: [],
                total: 0
            };
        }
        const data = await response.json();
        // Transform to our format
        const jobs = data.data.map((job)=>({
                id: job.id,
                title: job.job_title,
                company: job.company_name,
                companyLogo: job.company_logo,
                location: job.location || (job.remote ? "Remote" : "Unknown"),
                description: job.description || "",
                applyUrl: job.job_url,
                postedAt: job.posted_at,
                salaryMin: job.salary_min,
                salaryMax: job.salary_max,
                salaryCurrency: job.salary_currency || "USD",
                type: job.employment_type || "full_time",
                remote: job.remote,
                companyInfo: job.company_data ? {
                    fundingStage: job.company_data.funding_stage,
                    totalFunding: job.company_data.total_funding,
                    employeeCount: job.company_data.employee_count,
                    industry: job.company_data.industry
                } : undefined
            }));
        return {
            jobs,
            total: data.total
        };
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return {
            jobs: [],
            total: 0
        };
    }
}
function formatSalary(min, max, currency = "USD") {
    if (!min && !max) return null;
    const formatNum = (n)=>{
        if (n >= 1000000) {
            return `${(n / 1000000).toFixed(1)}M`;
        }
        if (n >= 1000) {
            return `${Math.round(n / 1000)}K`;
        }
        return n.toString();
    };
    const symbol = currency === "USD" ? "$" : currency;
    if (min && max) {
        return `${symbol}${formatNum(min)} - ${symbol}${formatNum(max)}`;
    }
    if (min) {
        return `${symbol}${formatNum(min)}+`;
    }
    if (max) {
        return `Up to ${symbol}${formatNum(max)}`;
    }
    return null;
}
function formatPostedDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
}
function formatFunding(amount) {
    if (!amount) return null;
    if (amount >= 1000000000) {
        return `$${(amount / 1000000000).toFixed(1)}B raised`;
    }
    if (amount >= 1000000) {
        return `$${Math.round(amount / 1000000)}M raised`;
    }
    if (amount >= 1000) {
        return `$${Math.round(amount / 1000)}K raised`;
    }
    return null;
}
function formatEmployeeCount(count) {
    if (!count) return null;
    if (count >= 10000) return "10,000+ employees";
    if (count >= 1000) return `${Math.round(count / 1000)}K+ employees`;
    if (count >= 500) return "500+ employees";
    if (count >= 100) return "100+ employees";
    if (count >= 50) return "50+ employees";
    return `${count} employees`;
}
}),
"[project]/Downloads/tech-sales-bible/app/api/jobs/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$tech$2d$sales$2d$bible$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/tech-sales-bible/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$tech$2d$sales$2d$bible$2f$lib$2f$theirstack$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/tech-sales-bible/lib/theirstack.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const location = searchParams.get("location") || undefined;
    const remoteOnly = searchParams.get("remote") === "true";
    const searchQuery = searchParams.get("q") || undefined;
    try {
        const { jobs, total } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$tech$2d$sales$2d$bible$2f$lib$2f$theirstack$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchSalesJobs"])({
            page,
            location,
            remoteOnly,
            searchQuery,
            perPage: 20
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$tech$2d$sales$2d$bible$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            jobs,
            total,
            page,
            hasMore: page * 20 < total
        });
    } catch (error) {
        console.error("Jobs API error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$tech$2d$sales$2d$bible$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch jobs"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2365fb51._.js.map
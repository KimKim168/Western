<?php

namespace App\Http\Controllers;

use App\Helpers\TelegramHelper;
use App\Models\Banner;
use App\Models\Faq;
use App\Models\KeyValue;
use App\Models\LibraryData;
use App\Models\Location;
use App\Models\Page;
use App\Models\Post;
use App\Models\PostCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;

class WesternFrontPageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $statistics = Page::where('code', 'statistics')->with('images')->with('children')->first();
        $ourCampuses = Page::where('code', 'our-campuses-home-page')->first();
        $activitiAndEvent = Page::where('code', 'activities-and-events')
            ->with(['children' => function ($query) {
                $query->orderBy('order_index'); // or orderBy('order_index') if you prefer
            }, 'children.images'])
            ->first();
        $contactUs = Page::where('code', 'contact-us')->with('images')->first();

        $Hero = Page::where('code', 'welcome-to-western-international-school')->with('images')->first();
        // $navBar = Page::where('parent_code')
        // ->with('children.children')
        // ->orderBy('order_index')
        // ->get();

        $homeVideoBanner = Banner::where('type_code', 'home-video-banner')->first();
        return Inertia::render('Western/Index', [
            'statistics' => $statistics,
            'ourCampuses' => $ourCampuses,
            'activitiAndEvent' => $activitiAndEvent,
            'contactUs' => $contactUs,
            'Hero' => $Hero,
            'homeVideoBanner' => $homeVideoBanner,
        ]);
    }

    public function history_and_values()
    {
        $historyAndValue = Page::where('code', 'history-and-value')->first();
        $timeLine = Page::where('code', 'western-international-school-campuses-timeLine')
            ->with('children')
            ->orderBy('order_index')
            ->first();
        $ourVision = Page::where('code', 'our-vision')->first();
        $ourMission = Page::where('code', 'our-mission')->first();
        $valuesWiscare = Page::where('code', 'valuse-wiscare')->with([
            'children' => function ($q) {
                $q->orderBy('order_index');
            },
            'children.images'
        ])->first();

        // return ($valuesWiscare);
        return Inertia::render('Western/HistoryAndValuse/Index', [
            'historyAndValue' => $historyAndValue,
            'ourVision' => $ourVision,
            'ourMission' => $ourMission,
            'valuesWiscare' => $valuesWiscare,
            'timeLine' => $timeLine,
        ]);
    }
    public function school_facilities()
    {
        $schoolFacilties = Page::where('code', 'school-facilities')
            ->with('images')
            ->with([
                'children' => function ($q) {
                    $q->orderBy('order_index');
                },
                'children.images'
            ])
            ->orderBy('order_index')
            ->first();

        // return ($schoolFacilties);
        return Inertia::render('Western/SchoolFacilities/Index', [
            'schoolFacilties' => $schoolFacilties,
        ]);
    }
    public function our_campuses()
    {
        $ourCampuses = Page::where('code', 'our-campuses')
            ->with('images')
            ->with([
                'children' => function ($q) {
                    $q->orderBy('order_index');
                },
                'children.images'
            ])
            ->orderBy('order_index')
            ->first();
        // return ($ourCampuses);
        return Inertia::render('Western/OurCampuses/Index', [
            'ourCampuses' => $ourCampuses,
        ]);
    }
    public function curriculum()
    {
        $curriculum = Page::where('code', 'curriculum')
            ->with('images')
            ->with([
                'children' => function ($q) {
                    $q->orderBy('order_index');
                },
                'children.images'
            ])
            ->orderBy('order_index')
            ->first();
        // return ($curriculum);
        return Inertia::render('Western/Curriculum/Index', [
            'curriculum' => $curriculum,
        ]);
    }
    public function programs()
    {
        $programs = Page::where('code', 'programs')
            ->with('images')
            ->with([
                'children' => function ($q) {
                    $q->orderBy('order_index');
                },
                'children.images'
            ])
            ->orderBy('order_index')
            ->first();
        // return ($programs);
        return Inertia::render('Western/Programs/Index', [
            'programs' => $programs
        ]);
    }
    public function class_schedules_and_subjects()
    {
        // $classSchedulesndSubjects = Page::where('code', 'class-schedule-and-subjects')
        //     ->with(['images' => function ($query) {
        //         $query->orderBy('image', 'asc'); // or 'desc' for descending
        //     }])
        //     ->with([
        //         'children' => function ($q) {
        //             $q->orderBy('order_index');
        //         },
        //         'children.images'
        //     ])
        //     ->orderBy('order_index')
        //     ->first();
        $classSchedules = Page::where('code', 'class-schedules')
            ->with(['images' => function ($query) {
                $query->orderBy('image', 'asc'); // or 'desc' for descending
            }])
            ->orderBy('order_index')
            ->first();
        $classSubject = Page::where('code', 'class-subjects')
            ->with(['images' => function ($query) {
                $query->orderBy('image', 'asc'); // or 'desc' for descending
            }])
            ->orderBy('order_index')
            ->first();

        // return ($classSubject);
        return Inertia::render('Western/ClassScheduleAndSubject/Index', [
            'classSchedules' => $classSchedules,
            'classSubject' => $classSubject,
        ]);
    }
    public function student_services()
    {
        $studentServices = Page::where('code', 'student-services')
            ->with('images')
            ->with([
                'children' => function ($q) {
                    $q->orderBy('order_index');
                },
                'children.images'
            ])
            ->orderBy('order_index')
            ->first();
        // return ($studentServices);
        return Inertia::render('Western/StudentServices/Index', [
            'studentServices' => $studentServices,
        ]);
    }
    public function activities_and_events()
    {
        $activitiesAndEvents = Page::where('code', 'activities-and-events')
            ->with('images')
            ->with([
                'children' => function ($q) {
                    $q->orderBy('order_index');
                },
                'children.images'
            ])
            ->orderBy('order_index')
            ->first();
        // return ($activitiesAndEvents);
        return Inertia::render('Western/ActivitiesAndSvents/Index', [
            'activitiesAndEvents' => $activitiesAndEvents,
        ]);
    }
    public function extracurricular_activities()
    {
        $extracurricularActivities = Page::where('code', 'extracurricular-activities')
            ->with('images')
            ->with([
                'children' => function ($q) {
                    $q->orderBy('order_index');
                },
                'children.images'
            ])
            ->orderBy('order_index')
            ->first();
        // return ($extracurricularActivities);
        return Inertia::render('Western/ExtracurricularActivities/Index', [
            'extracurricularActivities' => $extracurricularActivities,
        ]);
    }
    public function school_calendar()
    {
        $schoolCalendar = Page::where('code', 'school-calendar')
            ->with('images')
            ->with([
                'children' => function ($q) {
                    $q->orderBy('order_index');
                },
                'children.images'
            ])
            ->orderBy('order_index')
            ->first();
        // return ($schoolCalendar);
        return Inertia::render('Western/SchoolCalendar/Index', [
            'schoolCalendar' => $schoolCalendar,
        ]);
    }
    public function outreach_programs()
    {
        $outreachPrograms = Page::where('code', 'outreach-programs')
            ->with('images')
            ->with([
                'children' => function ($q) {
                    $q->orderBy('order_index');
                },
                'children.images'
            ])
            ->orderBy('order_index')
            ->first();
        // return ($outreachPrograms);
        return Inertia::render('Western/OutreachPrograms/Index', [
            'outreachPrograms' => $outreachPrograms,
        ]);
    }
    public function student_council()
    {
        $studentCouncil = Page::where('code', 'student-council')
            ->with('images')
            ->with([
                'images'
            ])
            ->orderBy('order_index')
            ->first();
        $gradeLevelLeaders = Page::where('code', 'grade-level-leaders')
            ->with('images')
            ->with([
                'children' => function ($q) {
                    $q->orderBy('order_index');
                },
                'children.images'
            ])
            ->orderBy('order_index')
            ->first();
        $campusRepresentatives = Page::where('code', 'campus-representatives')
            ->with('images')
            ->with([
                'children' => function ($q) {
                    $q->orderBy('order_index');
                },
                'children.images'
            ])
            ->orderBy('order_index')
            ->first();
        $studentCouncilInAction = Page::where('code', 'student-council-in-action')
            ->with('images')
            ->with([
                'children' => function ($q) {
                    $q->orderBy('order_index');
                },
                'children.images'
            ])
            ->orderBy('order_index')
            ->first();
        // return ($outreachPrograms);
        return Inertia::render('Western/StudentCouncil/Index', [
            'studentCouncil' => $studentCouncil,
            'gradeLevelLeaders' => $gradeLevelLeaders,
            'campusRepresentatives' => $campusRepresentatives,
            'studentCouncilInAction' => $studentCouncilInAction,
        ]);
    }
    public function admissions()
    {
        $howToEnrollYourChild = Page::where('code', 'how-to-enroll-your-child')->with([
            'children' => function ($q) {
                $q->orderBy('order_index');
            },
            'children.images'
        ])->with('images')->first();
        $schoolFees = Page::where('code', 'school-fees')->with([
            'children' => function ($q) {
                $q->orderBy('order_index');
            },
            'children.images'
        ])->with('images')->first();
        // return ($schoolFees);
        return Inertia::render('Western/Admissions/Index', [
            'howToEnrollYourChild' => $howToEnrollYourChild,
            'schoolFees' => $schoolFees,
        ]);
    }

    public function contact(Request $request)
    {
        $contact = Page::where('code', 'contact')->with('images')->first();
        return Inertia::render('Western/Contact', [
            'contact' => $contact,
        ]);
    }
    public function sent_message(Request $request)
    {
        $validated = $request->validate([
            'name'     => 'required|string|min:2|max:255',
            'phone'    => 'required|string|min:8|max:20',
            'email'    => 'nullable|email|max:255',
            'messages' => 'required|string|min:5|max:2000',
        ]);


        try {

            $message = (object) [
                'name'    => $validated['name'],
                'phone'   => $validated['phone'],
                'email'   => $validated['email'] ?? '---',
                'message' => $validated['messages'],
            ];
            TelegramHelper::sendMessage($message);

            return redirect()->back()->with('success', 'Message sent successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors('Failed to send message: ' . $e->getMessage());
        }
    }

    public function posts(Request $request)
    {
        $perPage = $request->input('perPage', 12);
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $category_code = $request->input('category_code');
        $sort_by = $request->input('sort_by');
        $sortDirection = $request->input('sortDirection', 'desc');

        $header = Page::where('code', 'news-and-blogs')->first();
        $query = Post::query();

        // Exclude 'about' by selecting all other columns
        $columns = Schema::getColumnListing('posts'); // get all columns dynamically
        $columns = array_diff($columns, ['long_description']); // remove 'about' column
        $query->select($columns);

        if ($value = $request->input('status')) {
            $query->where('status', $value);
        }
        // End Exclude

        if ($category_code) {
            $query->where('category_code', $category_code);
        }
        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                $sub_query->where('title', 'LIKE', "%{$search}%")
                    ->orWhere('title_kh', 'LIKE', "%{$search}%")
                    ->orWhere('short_description', 'LIKE', "%{$search}%")
                    ->orWhere('short_description_kh', 'LIKE', "%{$search}%")
                    ->orWhere('long_description', 'LIKE', "%{$search}%")
                    ->orWhere('long_description_kh', 'LIKE', "%{$search}%")
                    ->orWhere('category_code', 'LIKE', "%{$search}%");
            });
        }

        if ($sort_by) {
            switch ($sort_by) {
                case 'newest':
                    $query->orderBy('created_at', 'desc')->orderBy('id', 'desc');
                    break;

                case 'oldest':
                    $query->orderBy('created_at', 'asc')->orderBy('id', 'asc');
                    break;

                case 'az':
                    $query->orderBy('title', 'asc');
                    break;

                case 'za':
                    $query->orderBy('title', 'desc');
                    break;

                case 'most_viewed':
                    $query->orderBy('total_view_count', 'desc');
                    break;

                case 'least_viewed':
                    $query->orderBy('total_view_count', 'asc');
                    break;

                default:
                    // fallback if unknown value, optional
                    $query->orderBy('id', 'desc');
                    break;
            }
        } else {
            // default order if no sort_by param
            $query->orderBy('id', 'desc');
        }

        $query->with('category');

        // $tableData = $query->paginate($perPage)->onEachSide(2);

        $tableData =  $query->get();
        // return ($header);

        return Inertia::render('Western/NewsAndBlogs/Index', [
            'tableData' => $tableData,
            'header' => $header,
        ]);
    }

    public function post_show(Request $request, string $id)
    {
        $showData = Post::findOrFail($id)->load('category');
        $showData->increment('total_view_count');

        $query = Post::query();
        // return $showData;
        return Inertia::render('Western/NewsAndBlogs/Detail', [
            'showData' => $showData
        ]);
    }
}

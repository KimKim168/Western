<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Faq;
use App\Models\KeyValue;
use App\Models\LibraryData;
use App\Models\Location;
use App\Models\Page;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\Type;
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
                $query->orderBy('order_index', 'desc'); // or orderBy('order_index') if you prefer
            }, 'children.images'])
            ->first();
        $contactUs = Page::where('code', 'contact-us')->with('images')->first();
        
        $Hero = Page::where('code', 'welcome-to-western-international-school')->with('images')->first();
        // return ($activitiAndEvent);
        return Inertia::render('Western/Index', [
            'statistics' => $statistics,
            'ourCampuses' => $ourCampuses,
            'activitiAndEvent' => $activitiAndEvent,
            'contactUs' => $contactUs,
            'Hero' => $Hero,
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
        $valuesWiscare = Page::where('code', 'valuse-wiscare')->with('children.images')->first();

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
            ->with('children.images')
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
            ->with('children.images')
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
            ->with('children.images')
            ->orderBy('order_index')
            ->first();
        // return ($ourCampuses);
        return Inertia::render('Western/Curriculum/Index', [
            'curriculum' => $curriculum,
        ]);
    }
    public function admissions()
    {
        $howToEnrollYourChild = Page::where('code', 'how-to-enroll-your-child')->with('children.images')->with('images')->first();
        $schoolFees = Page::where('code', 'school-fees')->with('children.images')->with('images')->first();
        // return ($schoolFees);
        return Inertia::render('Western/Admissions/Index', [
            'howToEnrollYourChild' => $howToEnrollYourChild,
            'schoolFees' => $schoolFees,
        ]);
    }

    public function contact(Request $request)
    {
        return Inertia::render('TODO_PATH/Contact');
    }

    public function posts(Request $request)
    {
        $perPage = $request->input('perPage', 12);
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $category_code = $request->input('category_code');
        $sort_by = $request->input('sort_by');
        $sortDirection = $request->input('sortDirection', 'desc');

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

        $tableData = $query->paginate($perPage)->onEachSide(2);

        // $tableData =  $query->limit(2)->get();
        // return $tableData;

        return Inertia::render('Buddhist/Posts/Index', [
            'tableData' => $tableData,
        ]);
    }

    public function post_show(Request $request, string $id)
    {
        $showData = Post::findOrFail($id)->load('category');
        $showData->increment('total_view_count');

        $query = Post::query();
        $columns = Schema::getColumnListing('posts');
        $columns = array_diff($columns, ['long_description']);

        // First related items
        $relatedItems = (clone $query)
            ->select($columns)
            ->where('category_code', $showData->category_code)
            ->inRandomOrder()
            ->limit(5)
            ->get();

        // Second related items, excluding the first set
        $relatedItemsTwo = (clone $query)
            ->select($columns)
            ->where('category_code', $showData->category_code)
            ->whereNotIn('id', $relatedItems->pluck('id')) // exclude first items
            ->inRandomOrder()
            ->limit(5)
            ->get();

        // Increase view count
        // return $relatedItems;
        return Inertia::render('Buddhist/Posts/Show', ['showData' => $showData, 'relatedItems' => $relatedItems, 'relatedItemsTwo' => $relatedItemsTwo]);
    }
}
